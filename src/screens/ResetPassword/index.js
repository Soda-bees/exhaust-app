import React, {useState} from 'react';
import {styles} from '../ResetPassword/style';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import {colors} from '../../services';
import images from '../../services/utilities/images';

export default function ResetPassword({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [eyeIconShow, setEyeIconShow] = useState(false);
  const [eyeIconShowTwo, setEyeIconShowTwo] = useState(false);

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
          {/* <Text style={styles.emailLabelStyling}>Email</Text> */}
          <View style={styles.textInputFieldStyling}>
            <View style={styles.inputFieldRow}>
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
            <View style={styles.inputFieldRow}>
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
          <TouchableOpacity
            style={styles.continueBtnStyling}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.btnTextColor}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
