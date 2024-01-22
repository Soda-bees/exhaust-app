import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors } from '../../services';
import { styles } from '../ForgotPassword/style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import Loader from '../../components/Loader';
import { forgotPassword } from '../../services/config/API';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')

  const handleContinue = async () => {
    try {
      setLoader(true)
      const response = await forgotPassword(email)
      if (response.success) {
        setLoader(false)
        setError('')
        navigation.navigate('EmailOTP' , {otp:response.otp , email})
        setEmail('')
      } else {
        setLoader(false)
        setError(response.error || response.message)
      }
    } catch (error) {
      console.log(error);
      setError(error.message)
      setLoader(false)
    }
  }

  return (
    <SafeAreaView>
      <Header backImage={images.backIcon} />
      <View style={styles.topMainView}>
        <Text style={styles.forgotPassHeadingText}>Forgot Password</Text>
        <Text style={styles.forgotPassParaText}>Please enter your email</Text>
        <Text style={styles.forgotPassParaText}>
          to receive a verification code
        </Text>
        <Text style={styles.emailLabelStyling}>Email</Text>
        <TextInput
          style={styles.textStylingStyling}
          placeholder="xyz@gmail.com"
          placeholderTextColor={colors.lightGrey}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.errorText}>{error}</Text>
        {
          loader ?
            <View style={styles.loaderContainer}>
              <Loader />
            </View>
            :
            <TouchableOpacity style={styles.continueBtnStyling} onPress={handleContinue}>
              <Text style={styles.btnTextColor}>Continue</Text>
            </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
}
