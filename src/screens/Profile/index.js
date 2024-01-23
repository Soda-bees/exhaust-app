import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuthToken } from '../../store/authToken';
import { removeProducts } from '../../store/products';
import { removeUserData, selectUserData } from '../../store/userData';
import { colors, sizes } from '../../services';
import PhoneInput from 'react-native-phone-number-input';


export default function Profile({ navigation }) {

  const phoneInput = useRef(null)

  const userData = useSelector(selectUserData)

  // console.log(userData.countryCode);
  // console.log(userData.profile);
  const dispatch = useDispatch()

  const [radioBtn, setRadioBtn] = useState(false);
  const [value, setValue] = useState('');
  const [defaultCountryCode, setDefaultCountryCode] = useState(userData?.countryCode)
  const [contactNo, setContactNo] = useState(userData.number );

  const handleLogout = () => {
    dispatch(removeAuthToken())
    dispatch(removeUserData())
    dispatch(removeProducts())
  }

  // useEffect(() => {
  //   setDefaultCountryCode(userData?.countryCode)
  // }, [userData])

  // useEffect(() => {
  //   navigation.addListener('focus', () => {
  //     setDefaultCountryCode(userData?.countryCode)
  //     setContactNo(userData?.number)
  //     console.log("-=-=-==-=--=-=-==--09876");
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Profile'} backImage={images.backIcon} />
        <View style={styles.mainContainer}>
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
            <Text style={styles.placeholder}>Phone</Text>
            <View style={styles.verticalLine2}></View>
            <PhoneInput
              disabled
              ref={phoneInput}
              defaultValue={value}
              defaultCode={defaultCountryCode}
              // defaultCode={userData?.countryCode}
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
              flagButtonStyle={{
                backgroundColor: 'transparent',
                height: sizes.screenHeight * 0.04,
                width: sizes.screenHeight * 0.04,
                alignSelf: 'center',
              }}
              containerStyle={{
                backgroundColor: 'transparent',

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
              <Text style={styles.textStyling}>My orders</Text>
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
              <Text style={styles.textStyling}>Notification</Text>
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
        </View>
        <TouchableOpacity style={styles.bottomBtn}
          onPress={handleLogout}
        >
          <Image source={images.logout} style={styles.forwardIcon} />
          <Text style={styles.bottomBtnText}>Logout</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
