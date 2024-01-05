import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../services';
import {styles} from '../ForgotPassword/style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');
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
        <TouchableOpacity style={styles.continueBtnStyling} onPress={() => navigation.navigate('EmailOTP')}>
          <Text style={styles.btnTextColor}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
