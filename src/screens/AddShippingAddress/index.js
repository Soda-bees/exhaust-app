import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, fontSize, sizes} from '../../services';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-number-input';
import formatToJSON from '../../services/utilities/JsonLog';
import {useDispatch, useSelector} from 'react-redux';
import {
  addShippingAddressRedux,
  selectUserData,
  updateAddressRedux,
} from '../../store/userData';
import Loader from '../../components/Loader';
import {selectAuthToken} from '../../store/authToken';
import {
  addShippingAddress,
  updateShippingAddress,
} from '../../services/config/API';

export default function AddShippingAddress({navigation, route}) {
  const dispatch = useDispatch();
  const item = route.params?.item;

  const userData = useSelector(selectUserData);
  const authToken = useSelector(selectAuthToken);
  // console.log(formatToJSON(userData.shippingAddress.length));

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null); //countryPicker
  const [isCountryPickerVisible, setCountryPickerVisibility] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  // const [contactNo, setContactNo] = useState(userData ? userData.number : '');
  const [contactNo, setContactNo] = useState(
    route.params && item ? item?.number : userData ? userData.number : '',
  );
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [addressId, setAddressId] = useState('');
  const [defaultCountryCode, setDefaultCountryCode] = useState(
    route.params && item
      ? item?.countryCode
      : userData
      ? userData.countryCode
      : '',
  );

  // useEffect(() => {
  //   if (userData) {
  //     console.log(userData.number);
  //     setContactNo(userData.number)
  //   }
  // }, [userData])

  useEffect(() => {
    if (route.params && item) {
      setIsEdit(true);
      setAddress(item?.address);
      setCity(item?.city);
      setState(item?.state);
      setSelectedCountry(item?.country);
      setZipCode(String(item?.zipCode));
      setAddressId(item?._id);
    } else {
      setIsEdit(false);
    }
  }, [route.params]);

  const onCountrySelect = country => {
    setSelectedCountry(country.name);
    setCountryPickerVisibility(false);
  };

  const openCountryPicker = () => {
    setCountryPickerVisibility(true);
  };

  const handleAddShippingAddress = async () => {
    setLoader(true);
    try {
      const obj = {
        address,
        city,
        state,
        zipCode,
        country: selectedCountry,
        countryCode:
          phoneInput?.current?._reactInternals?.stateNode?.state?.countryCode,
        number: phoneInput?.current?._reactInternals?.stateNode?.state?.number,
      };
      const response = await addShippingAddress(authToken, obj);
      if (response.success) {
        const newAddress = response.newAddress;
        dispatch(addShippingAddressRedux(newAddress));
        setError('');
        setLoader(false);
        navigation.navigate('ShippingAddresses');
      } else {
        setError(response.message);
        setLoader(false);
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error.message);
      setError(error.message);
    }
  };

  const handleEditShippingAddress = async () => {
    try {
      setLoader(true);
      const obj = {
        addressId,
        address,
        city,
        state,
        zipCode,
        country: selectedCountry,
        selected: item?.selected,
        userId: item?.userId,
        countryCode:
          phoneInput?.current?._reactInternals?.stateNode?.state?.countryCode,
        number: phoneInput?.current?._reactInternals?.stateNode?.state?.number,
      };
      const response = await updateShippingAddress(authToken, obj);
      console.log(response);
      if (response.success) {
        const updatedAddress = response.updatedAddress;
        dispatch(updateAddressRedux(updatedAddress));
        setError('');
        setLoader(false);
        navigation.navigate('ShippingAddresses');
      } else {
        setError(response.message);
        setLoader(false);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>
          <Header
            title={isEdit ? 'Update Shipping Address' : 'Add Shipping Address'}
            backImage={images.backIcon}
          />
          <View style={styles.mainContainer}>
            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>Address</Text>

              <TextInput
                placeholder="Enter Address"
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
                onChangeText={text => setAddress(text)}
                value={address}
              />
            </View>

            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>City</Text>
              <TextInput
                placeholder="Enter City"
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
                onChangeText={text => setCity(text)}
                value={city}
              />
            </View>

            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>State/Province/Region</Text>
              <TextInput
                placeholder="Enter State"
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
                onChangeText={text => setState(text)}
                value={state}
              />
            </View>

            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>Zip Code (Postal Code)</Text>
              <TextInput
                placeholder="Enter Zip Code"
                placeholderTextColor={colors.disabledBg3}
                style={styles.inputField}
                keyboardType="numeric"
                onChangeText={text => setZipCode(text)}
                value={zipCode}
              />
            </View>

            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>Country</Text>
              <View style={styles.row}>
                <CountryPicker
                  withFilter
                  withFlag
                  withCountryNameButton
                  withAlphaFilter
                  placeholder={
                    selectedCountry ? selectedCountry : 'Select Country'
                  }
                  onSelect={onCountrySelect}
                  visible={isCountryPickerVisible}
                  onClose={() => setCountryPickerVisibility(false)}
                />
              </View>
            </View>
            <View style={styles.MainCartView2}>
              <Text style={styles.labelName}>Phone</Text>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode={defaultCountryCode}
                layout="first"
                withShadow={false}
                autoFocus={false}
                disableArrowIcon={true}
                textContainerStyle={styles.inputFieldBackground}
                onChangeFormattedText={text => {
                  setValue(text);
                }}
                value={contactNo}
                withDarkTheme={false}
                codeTextStyle={{
                  height: sizes.screenHeight * 0.028,
                  marginTop:
                    Platform.OS == 'android'
                      ? sizes.screenHeight * 0.004
                      : sizes.screenHeight * 0.015,
                  right: sizes.screenWidth * 0.025,
                }}
                flagButtonStyle={{
                  backgroundColor: colors.bgLight,
                  height: sizes.screenHeight * 0.04,
                  width: sizes.screenHeight * 0.04,
                  alignSelf: 'center',
                }}
                containerStyle={{
                  height: sizes.screenHeight * 0.05,
                  width: sizes.screenHeight * 0.346,
                }}
                textInputStyle={{
                  height: sizes.screenHeight * 0.058,
                  color: colors.black,
                  top: sizes.screenHeight * 0.004,
                  right:
                    Platform.OS == 'android'
                      ? sizes.screenWidth * 0.045
                      : sizes.screenWidth * 0.037,
                }}
                textInputProps={{
                  placeholderTextColor: colors.disabledBg2,
                }}
                onChangeText={text => {
                  setContactNo(text);
                }}
              />
            </View>
            <Text style={styles.errorTest}>{error}</Text>
          </View>
        </View>
        <View>
          {loader ? (
            <View
              style={
                Platform.OS == 'android'
                  ? styles.loaderView
                  : styles.bottomBtnIOS
              }>
              <Loader />
            </View>
          ) : (
            <TouchableOpacity
              style={
                Platform.OS == 'android'
                  ? styles.bottomBtn
                  : styles.bottomBtnIOS
              }
              onPress={() => {
                isEdit
                  ? handleEditShippingAddress()
                  : handleAddShippingAddress();
              }}>
              <Text style={styles.bottomBtnText}>
                {isEdit ? 'Update address' : 'Save Address'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
