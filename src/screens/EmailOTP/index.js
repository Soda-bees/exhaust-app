import { styles } from './style';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../services';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import Loader from '../../components/Loader';
import { forgotPassword } from '../../services/config/API';

export default function EmailOTP({ navigation, route }) {

  const { otp, email } = route.params

  const [value, setValue] = useState('');
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [OTP, setOTP] = useState()

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  useEffect(() => {
    if (otp) {
      setOTP(otp)
    }
  }, [otp])


  const handleConfirm = async () => {
    setLoader(true)
    if (!value) {
      setError('*Please enter OTP')
      setLoader(false)
    } else if (value !== OTP) {
      setError('*Please enter correct OTP')
      setLoader(false)
    } else {
      setLoader(false)
      setError(false)
      navigation.navigate('ResetPassword' , {email})
    }
  }

  const handleResendOTP = async () => {
    setLoader(true)
    try {
      const response = await forgotPassword(email)
      console.log(response);
      if (response.success) {
        setOTP(response.otp)
        setLoader(false)
        setError('')
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
        <Text style={styles.forgotPassHeadingText}>Enter OTP</Text>
        <Text style={styles.forgotPassParaText}>
          You would’ve received an OTP on your
        </Text>
        <Text style={styles.forgotPassParaText}>{email}</Text>
        <View style={styles.padding}>
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={styles.resendViewPositioning}>
          <Text style={styles.emailLabelStyling1}>Didn’t receive the OTP?</Text>
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={styles.emailLabelStyling2}> Resend</Text>
          </TouchableOpacity>
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
              <Text style={styles.btnTextColor}>Continue</Text>
            </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
}
