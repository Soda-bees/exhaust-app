import React, { useState } from 'react';
import { styles } from '../ResetPassword/style';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform
} from 'react-native';
import { colors } from '../../services';
import images from '../../services/utilities/images';
import Loader from '../../components/Loader';
import { resetPassword } from '../../services/config/API';

export default function ResetPassword({ navigation, route }) {

  const { email } = route.params

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [eyeIconShow, setEyeIconShow] = useState(false);
  const [eyeIconShowTwo, setEyeIconShowTwo] = useState(false);
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')

  const handleConfirm = async () => {
    setLoader(true)
    try {
      if (password === confirmPassword) {
        const response = await resetPassword(email, password)
        console.log(response);
        if (response.success) {
          setLoader(false)
          setError('')
          setPassword('')
          setConfirmPassword('')
          navigation.navigate('SignIn')
        } else {
          setLoader(false)
          setError(response.message)
        }
      } else {
        setError('*Password not match.')
        setLoader(false)
      }
    } catch (error) {
      console.log(error);
      setError(error.message)
      setLoader(false)
    }
  }

  return (
    <SafeAreaView>
      <View>
        <View style={styles.topMainView}>
          <Text style={styles.forgotPassHeadingText}>Reset Password</Text>
          <Text style={styles.forgotPassParaText}>
            Enter a new password to reset the
          </Text>
          <Text style={styles.forgotPassParaText}>
            password on your account.
          </Text>
          <View style={styles.textInputFieldStyling}>
            <View style={Platform.OS == 'android' ? styles.inputFieldRow : styles.inputFieldRowIOS}>
              <TextInput
                style={styles.textStylingStyling}
                placeholder="Enter New Password"
                placeholderTextColor={colors.lightGrey}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={eyeIconShow ? false : true}
              />
              <TouchableOpacity onPress={() => setEyeIconShow(!eyeIconShow)}>
                <Image
                  style={styles.icon2}
                  source={eyeIconShow ? images.eyeShow : images.eyeHide}
                />
              </TouchableOpacity>
            </View>
            <View style={Platform.OS == 'android' ? styles.inputFieldRow : styles.inputFieldRowIOS}>
              <TextInput
                style={styles.textStylingStyling}
                placeholder="Re-enter Password"
                placeholderTextColor={colors.lightGrey}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                secureTextEntry={eyeIconShowTwo ? false : true}
              />
              <TouchableOpacity onPress={() => setEyeIconShowTwo(!eyeIconShowTwo)}>
                <Image
                  style={styles.icon2}
                  source={eyeIconShowTwo ? images.eyeShow : images.eyeHide}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.errorText}>{error}</Text>
          {
            loader ?
              <View style={styles.loaderContainer}>
                <Loader />
              </View>
              :
              <TouchableOpacity
                style={styles.continueBtnStyling}
                onPress={handleConfirm}>
                <Text style={styles.btnTextColor}>Submit</Text>
              </TouchableOpacity>
          }
        </View>
      </View>
    </SafeAreaView>
  );
}
