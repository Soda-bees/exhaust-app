import React, { useEffect, useState } from 'react';
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
import CheckBox from '@react-native-community/checkbox';
import { styles } from './style';
import images from '../../services/utilities/images';
import { colors } from '../../services';
import Loader from '../../components/Loader';
import { getAllProduct, signin } from '../../services/config/API';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, setAuthToken } from '../../store/authToken';
import { selectUserData, setUserData } from '../../store/userData';
import { setProducts } from '../../store/products';
import { setBrands } from '../../store/brands';
import { getFcmToken } from '../../services/config/NotificationService';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import formatToJSON from '../../services/utilities/JsonLog';

GoogleSignin.configure({
  webClientId: '503500358813-8em4pvro5bvi7ib5309e93r0qo24vek7.apps.googleusercontent.com',
});

export default function SignIn({ navigation }) {

  const dispatch = useDispatch()

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [eyeIconShow, setEyeIconShow] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [deviceToken, setDeviceToken] = useState()
  const [loaderG, setLoaderG] = useState(false)
  const [loaderF, setLoaderF] = useState(false)

  const getDeviceToken = async () => {
    const token = await getFcmToken()
    setDeviceToken(token)
  }


  useEffect(() => {
    navigation.addListener('focus', () => {
      getDeviceToken()
    });
  }, [navigation]);


  const handleSignin = async () => {
    setLoader(true)
    try {
      const loverEmail = email?.toLowerCase()
      const obj = {
        email: loverEmail,
        password,
        deviceToken,
        loginWith: 'none'
      }
      const response = await signin(obj)
      if (response.success) {
        const products = response.products
        const userData = response.userData
        const token = response.token
        setError('')
        setEmail('')
        setPassword('')
        handleSetBrand(products)
        dispatch(setProducts(products))
        dispatch(setUserData(userData))
        dispatch(setAuthToken(token))
        setLoader(false)
      } else {
        setLoader(false)
        setError(response.message)
      }
    } catch (error) {
      setLoader(false)
      console.log(error);
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

  const handleNavigateToForgotPass = () => {
    setEmail('')
    setPassword('')
    setError('')
    navigation.navigate('ForgotPassword')
  }

  const handleNavigateSignup = () => {
    setEmail('')
    setPassword('')
    setError('')
    navigation.navigate('SignUp')
  }

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

  const handleGoogleSignin = async () => {
    try {
      const userData = await handleGoogle()
      const obj = {
        email: userData?.email.toLowerCase(),
        deviceToken,
        loginWith: 'google'
      }
      const response = await signin(obj)
      if (response.success) {
        const products = response.products
        const userData = response.userData
        const token = response.token
        setError('')
        handleSetBrand(products)
        dispatch(setProducts(products))
        dispatch(setUserData(userData))
        dispatch(setAuthToken(token))
        setLoaderG(false)
      } else {
        handleGoogleLogout()
        setLoaderG(false)
        console.log(response.message);
        setError(response.message)
      }
    } catch (error) {
      setLoaderG(false)
      setError(error.message)
    }
  }

  const handleGoogleLogout = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.revokeAccess();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebook = async () => {
    try {
      // Attempt login with permissions
      setLoaderF(true)
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccessToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(facebookCredential);

      // Access user information from the userCredential object
      const user = userCredential.user;
      // console.log(formatToJSON(user));

      // Return the user data
      return user;
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
      throw error;
      setError(error.message)
    }
  }

  const handleFacebookLogout = async () => {
    try {
      await auth().signOut();
      alert('log out')
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookSignin = async () => {
    try {
      const userData = await handleFacebook()
      const obj = {
        email: userData?.email.toLowerCase(),
        deviceToken,
        loginWith: 'facebook'
      }
      const response = await signin(obj)
      if (response.success) {
        const products = response.products
        const userData = response.userData
        const token = response.token
        setError('')
        handleSetBrand(products)
        dispatch(setProducts(products))
        dispatch(setUserData(userData))
        dispatch(setAuthToken(token))
        setLoaderF(false)
      } else {
        handleGoogleLogout()
        setLoaderF(false)
        setError(response.message)
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoaderF(false)
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View style={styles.logoRow}>
          <Image source={images.logo} style={styles.logoSizing} />
          <Text style={styles.logoText}>CSZ EXHAUST</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.signInSection}>
            <Text style={styles.heading}>Sign In</Text>
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

            <View style={styles.rememberMeRow}>
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                  <Image
                    source={
                      toggleCheckBox ? images.checkboxon : images.checkBoxBtn
                    }
                    style={styles.checkBoxSty}
                  />
                </TouchableOpacity>
                <Text style={styles.rememberMeText}>Remember me</Text>
              </View>
              <TouchableOpacity
                onPress={handleNavigateToForgotPass}
              >
                <Text style={styles.textUnderline}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            {
              error &&
              <Text style={styles.errorText}>{error}</Text>
            }
          </View>
          {
            loader ?
              <Loader />
              :
              <TouchableOpacity onPress={() => handleSignin()}>
                <View style={styles.blueBtn}>
                  <Text style={styles.blueBtnText}>Sign In</Text>
                </View>
              </TouchableOpacity>
          }
        </View>

        <View style={styles.row}>
          <Text style={styles.signUpText}> Don't have an account?</Text>
          <TouchableOpacity onPress={handleNavigateSignup}>
            <Text style={styles.blueText}> Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialMediaBtnRow} >
          {
            loaderF ?
              <View style={styles.socialMediaBtn}>
                <ActivityIndicator size={25} color={colors.btnBlue} />
              </View>
              :
              <TouchableOpacity style={styles.socialMediaBtn}
                onPress={handleFacebookSignin}
              >
                <Image style={styles.socialIcon} source={images.facebookIcon} />
                <Text style={styles.socialText}>Facebook</Text>
              </TouchableOpacity>
          }

          {
            loaderG ?
              <View style={styles.socialMediaBtn}>
                <ActivityIndicator size={25} color={colors.btnBlue} />
              </View>
              :
              <TouchableOpacity style={styles.socialMediaBtn}
                onPress={handleGoogleSignin}>
                <Image style={styles.social2Icon} source={images.googleIcon} />
                <Text style={styles.socialText}>+ Google</Text>
              </TouchableOpacity>
          }
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
