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
        console.log(response.userData);
        const userData = response.userData
        dispatch(setUserData(userData))
        const token = response.token
        try {
          const allProduct = await getAllProduct(token)
          const allProducts = allProduct.products
          setError('')
          setEmail('')
          setPassword('')
          dispatch(setProducts(allProducts))
          dispatch(setAuthToken(token))
          setLoader(false)
        } catch (error) {
          console.log("get all product =--=", error);
          setLoader(false)
          setError(error.message)
        }
      } else {
        setLoader(false)
        setError(response.message)
      }
    } catch (error) {
      console.log(error);
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
                onPress={() => navigation.navigate('ForgotPassword')}>
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
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
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
