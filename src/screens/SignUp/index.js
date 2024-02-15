import React, { useState, useRef, useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import images from '../../services/utilities/images';
import { colors, sizes } from '../../services';
import PhoneInput from 'react-native-phone-number-input';
import formatToJSON from '../../services/utilities/JsonLog';
import Loader from '../../components/Loader';
import { checkExistingEmail, signup } from '../../services/config/API';
import { getFcmToken } from '../../services/config/NotificationService';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { setBrands } from '../../store/brands';
import { setProducts } from '../../store/products';
import { setUserData } from '../../store/userData';
import { setAuthToken } from '../../store/authToken';

GoogleSignin.configure({
  webClientId: '503500358813-8em4pvro5bvi7ib5309e93r0qo24vek7.apps.googleusercontent.com',
});

export default function SignUp({ navigation }) {

  const dispatch = useDispatch()

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [eyeIconShow, setEyeIconShow] = useState(false);
  const [error, setError] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')
  const [loader, setLoader] = useState(false)
  const [deviceToken, setDeviceToken] = useState()
  const [loaderG, setLoaderG] = useState(false)

  const getDeviceToken = async () => {
    const token = await getFcmToken()
    setDeviceToken(token)
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      getDeviceToken()
    });
  }, [navigation]);

  const handleSignup = async () => {
    setLoader(true)
    try {
      const obj = {
        deviceToken,
        name,
        email: email.toLowerCase(),
        location,
        password,
        countryCode: phoneInput?.current?._reactInternals?.stateNode?.state?.countryCode,
        number: phoneInput?.current?._reactInternals?.stateNode?.state?.number,
        loginWith: 'none'
      }
      const response = await checkExistingEmail(obj)
      if (response.success) {
        setError('')
        setLoader(false)
        navigation.navigate('UploadPhoto', { userData: obj })
      } else {
        setError(response.message)
        setLoader(false)
      }
    } catch (error) {
      console.log(error);
      setLoader(false)
      setError(error.message)
    }
  }

  // const handleGoogle = async () => {
  //   if (Platform.OS == 'android') {
  //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //     const { idToken } = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     return auth()
  //       .signInWithCredential(googleCredential)
  //       .then(() => {
  //         let user = auth().currentUser;
  //         console.log(user, '----->>');
  //         alert(`Welcome ${user.displayName}`);
  //       });
  //   }

  //   // IOS
  //   else {
  //     const { idToken } = await GoogleSignin.signIn();
  //     console.log(idToken, '------->obj');
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     const userSignIn = auth()
  //       .signInWithCredential(googleCredential)
  //       .then(() => {
  //         let user = auth().currentUser;
  //         console.log(user.displayName, '----->>');
  //         alert(`Welcome ${user.displayName}`);
  //       });
  //   }
  // };

  const handleGoogle = async () => {
    if (Platform.OS === 'android') {
      try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
        let user = auth().currentUser;
        setLoaderG(true)
        return user;
      } catch (error) {
        console.error("Error signing in with Google:", error.message);
        setError(error.message)
        throw error;
      }
    }
  };

  const handleSignupWithGoogle = async () => {
    try {
      const userData = await handleGoogle()
      const obj = {
        deviceToken,
        name: userData?.displayName,
        email: userData?.email.toLowerCase(),
        location: '',
        password: '',
        profile: userData?.photoURL,
        countryCode: phoneInput?.current?._reactInternals?.stateNode?.state?.countryCode,
        number: '',
        loginWith: 'google'
      }
      const response = await signup(obj)
      if (response.success) {
        setLoaderG(false)
        console.log(response.message);
        const products = response.products
        const responseUserData = response.userData
        const token = response.token
        handleSetBrand(products)
        dispatch(setProducts(products))
        dispatch(setUserData(responseUserData))
        dispatch(setAuthToken(token))
      } else {
        setLoaderG(false)
        console.log(response.message);
      }
    } catch (error) {
      setLoaderG(false)
      setError(error.message)
    }
  }

  const handleSetBrand = (allProducts) => {
    const brandMap = {};

    // Iterate through each product
    allProducts.forEach((product) => {
      const { brand } = product;

      // Check if the brand name is already in the object
      if (brand.name in brandMap) {
        // If yes, increment the quantity count
        brandMap[brand.name].quantity += 1;
      } else {
        // If not, add the brand to the object with initial quantity of 1
        brandMap[brand.name] = { ...brand, quantity: 1, selected: false };
      }
    });

    // Convert the object values to an array
    const uniqueBrandsWithSelectedKey = Object.values(brandMap);

    dispatch(setBrands(uniqueBrandsWithSelectedKey))
  };

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View style={styles.logoRow}>
          <Image source={images.logo} style={styles.logoSizing} />
          <Text style={styles.logoText}>CSZ EXHAUST</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.signInSection}>
            <Text style={styles.heading}>Sign Up</Text>

            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.userIcon} />
              <TextInput
                placeholder="Name"
                placeholderTextColor={colors.lightGrey}
                style={styles.inputText}
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>

            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.userIcon} />
              <TextInput
                placeholder="Email"
                placeholderTextColor={colors.lightGrey}
                style={styles.inputText}
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>

            <View style={styles.inputField}>
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
                codeTextStyle={{
                  // backgroundColor:'red',
                  height: sizes.screenHeight * 0.028,
                  marginTop: sizes.screenHeight * 0.004,
                  // position:'absolute'
                  right: sizes.screenWidth * 0.025
                }}
                flagButtonStyle={{
                  backgroundColor: colors.bgLight,
                  height: sizes.screenHeight * 0.04,
                  width: sizes.screenHeight * 0.04,
                  alignSelf: 'center',
                  marginTop: sizes.screenWidth * 0.01
                }}
                containerStyle={{
                  height: sizes.screenHeight * 0.06,
                  width: sizes.screenHeight * 0.346,
                  borderRadius: sizes.screenWidth * 0.05,
                  marginBottom: sizes.screenWidth * 0.01,
                }}
                textInputStyle={{
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
            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.location2} />
              <TextInput
                placeholder="Location"
                placeholderTextColor={colors.lightGrey}
                style={styles.inputText}
                onChangeText={(text) => setLocation(text)}
                value={location}
              />
            </View>
            <View style={styles.passwordInputField}>
              <Image style={styles.icon} source={images.lockIcon} />
              <TextInput
                secureTextEntry={!eyeIconShow ? true : false}
                placeholder="Password"
                placeholderTextColor={colors.lightGrey}
                style={styles.inputText}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <TouchableOpacity onPress={() => setEyeIconShow(!eyeIconShow)}>
                <Image
                  style={styles.icon2}
                  source={eyeIconShow ? images.eyeShow : images.eyeHide}
                />
              </TouchableOpacity>
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>
          {
            loader ?
              <Loader />
              :
              <TouchableOpacity onPress={() => handleSignup()}>
                <View style={styles.blueBtn}>
                  <Text style={styles.blueBtnText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
          }

        </View>
        <View style={styles.row}>
          <Text style={styles.signUpText}> Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.blueText}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialMediaBtnRow}>
          <TouchableOpacity style={styles.socialMediaBtn}>
            <Image style={styles.socialIcon} source={images.facebookIcon} />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          {
            loaderG ?
              <View style={styles.socialMediaBtn}>
                <ActivityIndicator size={25} color={colors.btnBlue} />
              </View>
              :
              <TouchableOpacity style={styles.socialMediaBtn} onPress={handleSignupWithGoogle}>
                <Image style={styles.social2Icon} source={images.googleIcon} />
                <Text style={styles.socialText}>+ Google</Text>
              </TouchableOpacity>
          }
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
