import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuthToken } from '../../store/authToken';
import { removeProducts } from '../../store/products';
import { removeUserData, selectUserData } from '../../store/userData';
import { colors, sizes } from '../../services';
import PhoneInput from 'react-native-phone-number-input';


export default function Profile({ navigation }) {

  const phoneInput = useRef(null)

  const userData = useSelector(selectUserData)

  console.log(userData.countryCode);
  console.log(userData.number);
  const dispatch = useDispatch()

  const [radioBtn, setRadioBtn] = useState(false);
  const [value, setValue] = useState('');
  const [defaultCountryCode, setDefaultCountryCode] = useState(userData?.countryCode)
  const [contactNo, setContactNo] = useState(userData.number);

  const handleLogout = () => {
    dispatch(removeAuthToken())
    dispatch(removeUserData())
    dispatch(removeProducts())
  }

  // useEffect(() => {
  //   setDefaultCountryCode(userData?.countryCode)
  // }, [userData])

  useEffect(() => {
    navigation.addListener('focus', () => {
      setDefaultCountryCode(userData?.countryCode)
      setContactNo(userData?.number)

    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Profile'} backImage={images.backIcon} />
        <View style={styles.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <Image source={userData ? { uri: userData?.profile } : images.profileImg} style={styles.profileImgSty} />
            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.friends} />
              <View style={styles.verticalLine}></View>
              <Text style={styles.placeholder}>Name</Text>
              <TextInput
                placeholder={userData?.name}
                placeholderTextColor={colors.black}
                style={styles.inputText}
                editable={false}
              />
            </View>
            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.email} />
              <View style={styles.verticalLine}></View>
              <Text style={styles.placeholder}>Email</Text>
              <TextInput
                placeholder={userData?.email}
                placeholderTextColor={colors.black}
                style={styles.inputText}
                editable={false}
              />
            </View>
            <View style={styles.MainCartView2}>
              <Text style={styles.placeholderPhone}>Phone</Text>
              <View style={styles.verticalLine2}></View>
              <PhoneInput
                disabled
                ref={phoneInput}
                defaultValue={value}
                defaultCode={defaultCountryCode}
                layout="first"
                withShadow={false}
                autoFocus={false}
                disableArrowIcon={true}
                textContainerStyle={styles.inputFieldBackground}
                codeTextStyle={{
                  // backgroundColor:'red',
                  height: sizes.screenHeight * 0.028,
                  marginTop: sizes.screenHeight * 0.004,
                  // position:'absolute'
                  right: sizes.screenWidth * 0.025
                }}
                onChangeFormattedText={text => {
                  setValue(text);
                }}
                value={contactNo}
                withDarkTheme={false}
                flagButtonStyle={{
                  //flag
                  backgroundColor: 'transparent',
                  height: sizes.screenHeight * 0.04,
                  width: sizes.screenHeight * 0.04,
                  alignSelf: 'center',
                }}
                containerStyle={{
                  //all
                  backgroundColor: 'transparent',
                  height: sizes.screenHeight * 0.05,
                  width: sizes.screenHeight * 0.346,
                }}
                textInputStyle={{
                  //number
                  height: sizes.screenHeight * 0.058,
                  color: colors.black,
                  top: sizes.screenHeight * 0.004,
                  right: sizes.screenWidth * 0.045
                }}
                textInputProps={{
                  placeholderTextColor: colors.disabledBg2,
                }}
                onChangeText={text => {
                  setContactNo(text);
                }}
              />
            </View>

            <Text style={styles.bottomHeading}>Settings</Text>
            <View style={styles.bottomMainView}>
              <TouchableOpacity
                style={styles.bottomView}
                onPress={() => navigation.navigate('EditProfile')}>
                <Image source={images.friends} style={styles.iconImgStyBottom} />
                <Text style={styles.textStyling}>Edit Profile</Text>
                <Image
                  source={images.brownArrow}
                  style={styles.bottonIconImgSty}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomView}>
                <Image
                  source={images.helpCenter}
                  style={styles.iconImgStyBottom}
                />
                <Text style={styles.textStyling}>Help Center</Text>
                <Image
                  source={images.brownArrow}
                  style={styles.bottonIconImgSty}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomView}
                onPress={() => navigation.navigate('MyOrders')}
              >
                <Image
                  source={images.orders}
                  style={styles.iconImgStyBottom}
                />
                <Text style={styles.textStyling}>My Orders</Text>
                <Image
                  source={images.brownArrow}
                  style={styles.bottonIconImgSty}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomView}
                onPress={() => navigation.navigate('ShippingAddresses')}
              >
                <Image
                  source={images.address}
                  style={styles.iconImgStyBottom}
                />
                <Text style={styles.textStyling}>My Address</Text>
                <Image
                  source={images.brownArrow}
                  style={styles.bottonIconImgSty}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomView}
                onPress={() => navigation.navigate('PaymentMethod')}
              >
                <Image
                  source={images.profileCard}
                  style={styles.iconImgStyBottom}
                />
                <Text style={styles.textStyling}>My Cards</Text>
                <Image
                  source={images.brownArrow}
                  style={styles.bottonIconImgSty}
                />
              </TouchableOpacity>
              <View style={styles.bottomView}>
                <Image
                  source={images.notification}
                  style={styles.iconImgStyBottom}
                />
                <Text style={styles.textStyling}>Notifications</Text>
                <TouchableOpacity
                  style={styles.btnIconView}
                  onPress={() => setRadioBtn(!radioBtn)}>
                  <Image
                    source={radioBtn ? images.btnOn : images.btnOff}
                    style={styles.btnIconImgSty}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.bottomBtn}
              onPress={handleLogout}
            >
              <Image source={images.logout} style={styles.forwardIcon} />
              <Text style={styles.bottomBtnText}>Logout</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}
