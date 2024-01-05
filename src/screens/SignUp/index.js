import React, {useState} from 'react';
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
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';

export default function SignUp({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [eyeIconShow, setEyeIconShow] = useState(false);

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
                placeholderTextColor={colors.disabledBg}
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.userIcon} />
              <TextInput
                placeholder="Email"
                placeholderTextColor={colors.disabledBg}
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.lockIcon} />
              <TextInput
                secureTextEntry
                placeholder="Phone Number"
                placeholderTextColor={colors.disabledBg}
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputField}>
              <Image style={styles.icon} source={images.lockIcon} />
              <TextInput
                secureTextEntry={!eyeIconShow ? true : false}
                placeholder="Password"
                placeholderTextColor={colors.disabledBg}
                style={styles.inputText}
              />
              <TouchableOpacity onPress={() => setEyeIconShow(!eyeIconShow)}>
                <Image
                  style={styles.icon2}
                  source={eyeIconShow ? images.eyeShow : images.eyeHide}
                />
              </TouchableOpacity>
            </View>
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
