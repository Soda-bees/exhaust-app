import React, {useState, useRef} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import PhoneInput from 'react-native-phone-number-input';

export default function SignUp({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [eyeIconShow, setEyeIconShow] = useState(false);
  const [error, setError] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

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
              />
            </View>

            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.userIcon} />
              <TextInput
                placeholder="Email"
                placeholderTextColor={colors.lightGrey}
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputField}>
              {/* <Image style={styles.icon} source={images.lockIcon} /> */}
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
                  setFormattedValue(text);
                }}
                withDarkTheme={false}
                flagButtonStyle={{
                  backgroundColor: colors.bgLight,
                  height: sizes.screenHeight * 0.04,
                  width: sizes.screenHeight * 0.04,
                  alignSelf:'center',
                }}
                containerStyle={{
                  height: sizes.screenHeight * 0.07,
                  width: sizes.screenHeight * 0.346,
                }}
                textInputStyle={{
                  height: sizes.screenHeight * 0.07,
                  color: colors.black,
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
                secureTextEntry={!eyeIconShow ? true : false}
                placeholder="Location"
                placeholderTextColor={colors.lightGrey}
                style={styles.inputText}
              />
            </View>
            <View style={styles.passwordInputField}>
              <Image style={styles.icon} source={images.lockIcon} />
              <TextInput
                secureTextEntry={!eyeIconShow ? true : false}
                placeholder="Password"
                placeholderTextColor={colors.lightGrey}
                style={styles.inputText}
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
          <TouchableOpacity onPress={() => navigation.navigate('UploadPhoto')}>
            <View style={styles.blueBtn}>
              <Text style={styles.blueBtnText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.signUpText}> Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.blueText}> Sign In</Text>
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
