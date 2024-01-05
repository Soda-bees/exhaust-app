import {styles} from './style';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../services';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function EmailOTP({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;
  return (
    <SafeAreaView>
      <Header backImage={images.backIcon} />
      <View style={styles.topMainView}>
        <Text style={styles.forgotPassHeadingText}>Enter OTP</Text>
        <Text style={styles.forgotPassParaText}>
          You would’ve received an OTP on your
        </Text>
        <Text style={styles.forgotPassParaText}>email ***@gmail.com </Text>
        <View style={styles.padding}>
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
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
          <TouchableOpacity>
            <Text style={styles.emailLabelStyling2}> Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.continueBtnStyling}
          onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.btnTextColor}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
