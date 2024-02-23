import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform
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
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '503500358813-8em4pvro5bvi7ib5309e93r0qo24vek7.apps.googleusercontent.com',
});

export default function Profile({ navigation }) {

  const phoneInput = useRef(null)

  const userData = useSelector(selectUserData)

  const dispatch = useDispatch()

  const [radioBtn, setRadioBtn] = useState(false);
  const [value, setValue] = useState('');
  const [defaultCountryCode, setDefaultCountryCode] = useState(userData.countryCode)
  const [contactNo, setContactNo] = useState(userData.number);

  const handleGoogleLogout = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.revokeAccess();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    console.log(userData.loginWith);
    if (userData?.loginWith === 'google') {
      await handleGoogleLogout()
      dispatch(removeAuthToken())
      dispatch(removeUserData())
      dispatch(removeProducts())
    } else {
      dispatch(removeAuthToken())
      dispatch(removeUserData())
      dispatch(removeProducts())
    }
  }


  useEffect(() => {
    setDefaultCountryCode(userData?.countryCode);
    setContactNo(userData?.number);
  }, [userData]);

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Profile'} backImage={images.backIcon} />
        <View
          style={styles.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={userData ? { uri: userData?.profile } : images.profileImg} style={styles.profileImgSty} />
            <View style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}>
              <Image style={styles.icon} source={images.friends} />
              <View style={styles.verticalLine}></View>
              <Text style={Platform.OS == 'android' ? styles.placeholder : styles.placeholderIOS}>Name</Text> 
              <TextInput
                placeholder={userData?.name}
                placeholderTextColor={colors.black}
                style={styles.inputText}
                editable={false}
              />
            </View>
            <View style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}>
              <Image style={styles.icon} source={images.email} />
              <View style={styles.verticalLine}></View>
              <Text style={Platform.OS == 'android' ? styles.placeholder : styles.placeholderIOS}>Email</Text> 
              <TextInput
                placeholder={userData?.email}
                placeholderTextColor={colors.black}
                style={styles.inputText}
                editable={false}
              />
            </View>
            <View style={Platform.OS == 'android' ? styles.MainCartView2 : styles.MainCartView2IOS}>
              <Text style={Platform.OS == 'android' ? styles.placeholderPhone : styles.placeholderPhoneIOS}>Phone</Text>
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
                  height: sizes.screenHeight * 0.028,
                  marginTop: Platform.OS == 'android' ? sizes.screenHeight * 0.004 : sizes.screenHeight * 0.015,
                  right: sizes.screenWidth * 0.025,
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
                  right:Platform.OS == 'android' ? sizes.screenWidth * 0.045 : sizes.screenWidth * 0.037, 
                }}
                textInputProps={{
                  placeholderTextColor: colors.disabledBg2,
                }}
              />
            </View>

            <Text style={styles.bottomHeading}>Settings</Text> 
            <View style={Platform.OS == 'android' ? styles.bottomMainView : styles.bottomMainViewIOS}>
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
              {/* <TouchableOpacity style={styles.bottomView}
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
              </TouchableOpacity> */}
              {
                userData.loginWith === 'none' &&
                <TouchableOpacity style={styles.bottomView}
                  onPress={() => navigation.navigate('ChangePassword')}
                >
                  <Image
                    source={images.changePass}
                    style={styles.iconImgStyBottom}
                  />
                  <Text style={styles.textStyling}>Change Password</Text>
                  <Image
                    source={images.brownArrow}
                    style={styles.bottonIconImgSty}
                  />
                </TouchableOpacity>
              }

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
            <TouchableOpacity style={Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS} 
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
