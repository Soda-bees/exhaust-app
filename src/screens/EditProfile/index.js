import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import { colors, sizes } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, updateProfileDataRedux } from '../../store/userData';
import PhoneInput from 'react-native-phone-number-input';
import formatToJSON from '../../services/utilities/JsonLog';
import Loader from '../../components/Loader';
import { launchImageLibrary } from 'react-native-image-picker';
import { updateProfile, uploadProfile } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';


export default function EditProfile({ navigation }) {

  const phoneInput = useRef(null)
  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)

  const [defaultCountryCode, setDefaultCountryCode] = useState(userData ? userData.countryCode : '')
  const [contactNo, setContactNo] = useState(userData ? userData.number : '');
  const [value, setValue] = useState('');
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [profile, setProfile] = useState('')
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setName(userData?.name)
    setLocation(userData?.location)
    setProfile(userData.profile)
  }, [userData])

  const handleUploadPhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      // console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        // console.log(res.assets[0]);
        const img = res.assets[0];
        // setImgUri(img.uri);
        handleUploadProfile(img);
      }
    });
  };

  const handleUploadProfile = async (image) => {
    setLoader(true)
    try {
      const img = {
        uri: image.uri,
        type: image.type,
        fileName: image.fileName,
      };
      const formData = new FormData();
      formData.append('image', {
        uri: img.uri,
        type: img.type,
        name: img.fileName,
      });

      const response = await uploadProfile(formData)
      console.log("-=-=-=9098" , response);
      if (response.success) {
        setError('')
        setProfile(response.url)
        setLoader(false)
      } else {
        setError(response.message)
        setLoader(false)
        console.log(response.message);
      }
    } catch (error) {
      setError(error.message)
      setLoader(false)
      console.log(error);
    }
  }

  const handleSave = async () => {
    try {
      const obj = {
        name,
        location,
        countryCode: phoneInput?.current?._reactInternals?.stateNode?.state?.countryCode,
        number: phoneInput?.current?._reactInternals?.stateNode?.state?.number,
        profile
      }
      setLoader(true)
      const response = await updateProfile(authToken, obj)
      if (response.success) {
        const userData = response.userData
        dispatch(updateProfileDataRedux(userData))
        setLoader(false)
        setError('')
        navigation.navigate('Profile')
      } else {
        setLoader(false)
        setError(response.message)
      }
    } catch (error) {
      setLoader(false)
      console.log(error);
      setError(error.message)
    }

  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>

          <Header title={'Profile'} backImage={images.backIcon} />
          <View style={styles.mainContainer}>
            <Image source={profile ? { uri: profile } : images.profileImg} style={styles.profileImgSty} />
            <TouchableOpacity style={styles.editImgView}
              onPress={handleUploadPhoto}
            >
              <Image source={images.editPencil} style={styles.editImgSty} />
            </TouchableOpacity>
            <View>
              <Text style={styles.labelTextSty}>Name</Text>
              <View style={styles.fieldView}>
                <Image source={images.friends} style={styles.iconImgSty} />
                <View style={styles.verticalLine}></View>
                <TextInput
                  placeholder="Your Name"
                  placeholderTextColor={colors.lightGrey}
                  style={styles.textSty}
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
              </View>
            </View>
            <View>
              <Text style={styles.labelTextSty}>Email</Text>
              <View style={styles.fieldView}>
                <Image source={images.email} style={styles.iconImgSty} />
                <View style={styles.verticalLine}></View>
                <TextInput
                  editable={false}
                  placeholder={userData?.email}
                  placeholderTextColor={colors.black}
                  style={styles.textSty}
                />
              </View>
            </View>
            <View>
              <Text style={styles.labelTextSty}>Location</Text>
              <View style={styles.fieldView}>
                <Image source={images.location} style={styles.iconImgSty} />
                <View style={styles.verticalLine}></View>
                <TextInput
                  placeholder="Your Location"
                  placeholderTextColor={colors.lightGrey}
                  style={styles.textSty}
                  onChangeText={(text) => setLocation(text)}
                  value={location}
                />
              </View>
            </View>
            <View style={styles.MainCartView2}>
              <Text style={styles.placeholder}>Phone</Text>
              <View style={styles.verticalLine2}></View>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode={defaultCountryCode}
                layout="first"
                withShadow={false}
                autoFocus={false}
                disableArrowIcon={true}
                textContainerStyle={styles.inputFieldBackground}
                onChangeFormattedText={text => {
                  setValue(text);
                }}
                value={contactNo}
                withDarkTheme={false}
                codeTextStyle={{
                  // backgroundColor:'red',
                  height:sizes.screenHeight * 0.028,
                  marginTop:sizes.screenHeight * 0.004,
                  // position:'absolute'
                  right:sizes.screenWidth * 0.025
                }}
                flagButtonStyle={{
                  backgroundColor: 'transparent',
                  height: sizes.screenHeight * 0.04,
                  width: sizes.screenHeight * 0.04,
                  alignSelf: 'center',
                }}
                containerStyle={{
                  backgroundColor: 'transparent',

                  height: sizes.screenHeight * 0.05,
                  width: sizes.screenHeight * 0.346,
                }}
                textInputStyle={{
                  height: sizes.screenHeight * 0.058,
                  color: colors.black,
                  top: sizes.screenHeight * 0.004,
                  right:sizes.screenWidth * 0.045
                }}
                textInputProps={{
                  placeholderTextColor: colors.disabledBg2,
                }}
                onChangeText={text => {
                  setContactNo(text);
                }}
              />
            </View>

          </View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        {
          loader ?
            <View style={styles.loaderContainer}>
              <Loader />
            </View>
            :
            <TouchableOpacity
              style={styles.bottomBtn}
              onPress={handleSave}
            // onPress={() => navigation.navigate('MyTabs')}
            >
              <Text style={styles.bottomBtnText}>Save</Text>
            </TouchableOpacity>
        }
      </ImageBackground>
    </SafeAreaView>
  );
}
