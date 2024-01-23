import React, { useState } from 'react';
import {
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

export default function SignIn({ navigation }) {

  const dispatch = useDispatch()

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [eyeIconShow, setEyeIconShow] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')


  const handleSignin = async () => {
    setLoader(true)
    try {
      const loverEmail = email?.toLowerCase()
      const response = await signin(loverEmail, password)
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

        <View style={styles.socialMediaBtnRow}>
          <TouchableOpacity style={styles.socialMediaBtn}>
            <Image style={styles.socialIcon} source={images.facebookIcon} />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaBtn}>
            <Image style={styles.social2Icon} source={images.googleIcon} />
            <Text style={styles.socialText}>+ Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
