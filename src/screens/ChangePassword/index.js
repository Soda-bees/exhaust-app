import React, {useState} from 'react';
import {styles} from './style';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import {colors} from '../../services';
import images from '../../services/utilities/images';
import Loader from '../../components/Loader';
import {changePassword, resetPassword} from '../../services/config/API';
import {useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authToken';
import SuccessModal from '../../components/SuccessModal';
import Header from '../../components/Header';

export default function ChangePassword({navigation, route}) {
  const authToken = useSelector(selectAuthToken);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [eyeIconShow, setEyeIconShow] = useState(false);
  const [eyeIconShowTwo, setEyeIconShowTwo] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [isModalVisisble, setIsModalVisisble] = useState(false);

  const handleConfirm = async () => {
    setLoader(true);
    try {
      if (password === confirmPassword) {
        const response = await changePassword(authToken, password);
        if (response.success) {
          setLoader(false);
          setError('');
          setPassword('');
          setConfirmPassword('');
          setIsModalVisisble(true);
        } else {
          setLoader(false);
          setError(response.message);
        }
      } else {
        setError('*Password not match.');
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Header backImage={images.backIcon} />
        <View style={styles.topMainView}>
          <Text style={styles.forgotPassHeadingText}>Change Password</Text>
          <Text style={styles.forgotPassParaText}>
            Enter a new password to change the
          </Text>
          <Text style={styles.forgotPassParaText}>
            password on your account.
          </Text>
          <View style={styles.textInputFieldStyling}>
            <View
              style={
                Platform.OS == 'android'
                  ? styles.inputFieldRow
                  : styles.inputFieldRowIOS
              }>
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
            <View
              style={
                Platform.OS == 'android'
                  ? styles.inputFieldRow
                  : styles.inputFieldRowIOS
              }>
              <TextInput
                style={styles.textStylingStyling}
                placeholder="Re-enter Password"
                placeholderTextColor={colors.lightGrey}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                secureTextEntry={eyeIconShowTwo ? false : true}
              />
              <TouchableOpacity
                onPress={() => setEyeIconShowTwo(!eyeIconShowTwo)}>
                <Image
                  style={styles.icon2}
                  source={eyeIconShowTwo ? images.eyeShow : images.eyeHide}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.errorText}>{error}</Text>
          {loader ? (
            <View style={styles.loaderContainer}>
              <Loader />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.continueBtnStyling}
              onPress={handleConfirm}>
              <Text style={styles.btnTextColor}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <SuccessModal
        isVisible={isModalVisisble}
        title={'Password change\nsuccessfully'}
        navigateTo={'Profile'}
      />
    </SafeAreaView>
  );
}
