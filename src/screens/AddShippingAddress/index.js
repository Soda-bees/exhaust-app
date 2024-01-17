import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import { colors, fontSize, sizes } from '../../services';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-number-input';
import formatToJSON from '../../services/utilities/JsonLog';
import { useDispatch, useSelector } from 'react-redux';
import { addShippingAddressRedux, selectUserData } from '../../store/userData';
import Loader from '../../components/Loader';
import { selectAuthToken } from '../../store/authToken';
import { addShippingAddress } from '../../services/config/API';

export default function AddShippingAddress({ navigation }) {

  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)
  // console.log(formatToJSON(userData.shippingAddress.length));

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState(); //number
  const [selectedCountry, setSelectedCountry] = useState(null); //countryPicker
  const [isCountryPickerVisible, setCountryPickerVisibility] = useState(false);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null)
  const [contactNo, setContactNo] = useState('');
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')

  const onCountrySelect = country => {
    setSelectedCountry(country.name);
    setCountryPickerVisibility(false);
  };

  const openCountryPicker = () => {
    setCountryPickerVisibility(true);
  };

  const handleAddShippingAddress = async () => {
    // navigation.navigate('Checkout')
    setLoader(true)
    try {
      const obj = {
        address,
        city,
        state,
        zipCode,
        country: selectedCountry,
        phone: value,
      }
      const response = await addShippingAddress(authToken, obj)
      console.log(response);
      if (response.success) {
        const newAddress = response.newAddress
        dispatch(addShippingAddressRedux(newAddress))
        setError('')
        setLoader(false)
      } else {
        setError(response.message)
        setLoader(false)
      }
      setLoader(false)
    } catch (error) {
      setLoader(false)
      console.log(error.message);
      setError(error.message)
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>
          <Header
            title={'Adding Shipping Addresses'}
            backImage={images.backIcon}
          />
          <View style={styles.mainContainer}>
            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>Address</Text>

              <TextInput
                placeholder="Enter address"
                placeholderTextColor={colors.black}
                style={styles.inputField}
                onChangeText={text => setAddress(text)}
                value={address}
              />
            </View>

            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>City</Text>
              <TextInput
                placeholder="Enter city."
                placeholderTextColor={colors.black}
                style={styles.inputField}
                onChangeText={text => setCity(text)}
                value={city}
              />
            </View>

            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>State/Province/Region</Text>
              <TextInput
                placeholder="Enter state"
                placeholderTextColor={colors.black}
                style={styles.inputField}
                onChangeText={text => setState(text)}
                value={state}
              />
            </View>

            <View style={styles.MainCartView}>
              <Text style={styles.labelName}>Zip Code (Postal Code)</Text>
              <TextInput
                placeholder="Enter zip code"
                placeholderTextColor={colors.black}
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
                  placeholder={selectedCountry ? selectedCountry : 'Select country'}
                  onSelect={onCountrySelect}
                  visible={isCountryPickerVisible}
                  onClose={() => setCountryPickerVisibility(false)}
                />
              </View>
            </View>
            <View style={styles.MainCartView2}>
              <Text style={styles.labelName}>Zip Code (Postal Code)</Text>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="US"
                layout="first"
                withShadow={false}
                autoFocus={false}
                disableArrowIcon={true}
                textContainerStyle={styles.inputFieldBackground}
                onChangeFormattedText={text => {
                  setValue(text);
                }}
                value={formattedValue}
                withDarkTheme={false}
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
                  height: sizes.screenHeight * 0.05,
                  color: colors.black,
                  top: sizes.screenHeight * 0.004
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
          {
            loader ?
              <View style={styles.loaderView}>
                <Loader />
              </View>
              :
              <TouchableOpacity
                style={styles.bottomBtn}
                onPress={handleAddShippingAddress}
              >
                <Text style={styles.bottomBtnText} >Save Address</Text>
              </TouchableOpacity>
          }
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
