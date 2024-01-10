import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { removeAuthToken } from '../../store/authToken';

export default function Profile({navigation}) {
  const dispatch = useDispatch()
  const [radioBtn, setRadioBtn] = useState(false);

  const handleLogout = () => {
    dispatch(removeAuthToken())
  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Profile'} backImage={images.backIcon} />
        <View style={styles.mainContainer}>
          <Image source={images.profileImg} style={styles.profileImgSty} />
          <View>
            <Text style={styles.labelTextSty}>Name</Text>
            <View style={styles.fieldView}>
              <Image source={images.friends} style={styles.iconImgSty} />
              <View style={styles.verticalLine}></View>
              <Text style={styles.textSty}>John Doe</Text>
            </View>
          </View>
          <View>
            <Text style={styles.labelTextSty}>Email</Text>
            <View style={styles.fieldView}>
              <Image source={images.email} style={styles.iconImgSty} />
              <View style={styles.verticalLine}></View>
              <Text style={styles.textSty}>john123@gmail.com</Text>
            </View>
          </View>
          <View>
            <Text style={styles.labelTextSty}>Phone</Text>
            <View style={styles.fieldView}>
              <Image source={images.phone} style={styles.iconImgSty} />
              <View style={styles.verticalLine}></View>
              <Text style={styles.textSty}>+12345678</Text>
            </View>
          </View>
          <Text style={styles.bottomHeading}>Settings</Text>
          <View style={styles.bottomMainView}>
            <TouchableOpacity
              style={styles.bottomView}
              onPress={() => navigation.navigate('EditProfile')}>
              <Image source={images.friends} style={styles.iconImgStyBottom} />
              <Text style={styles.textStyling}>Edit Profile</Text>
              <Image
                source={images.brownArrow}
                style={styles.bottonIconImgSty}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomView}>
              <Image
                source={images.helpCenter}
                style={styles.iconImgStyBottom}
              />
              <Text style={styles.textStyling}>Help Center</Text>
              <Image
                source={images.brownArrow}
                style={styles.bottonIconImgSty}
              />
            </TouchableOpacity>
            <View style={styles.bottomView}>
              <Image
                source={images.notification}
                style={styles.iconImgStyBottom}
              />
              <Text style={styles.textStyling}>Notification</Text>
              <TouchableOpacity
                style={styles.btnIconView}
                onPress={() => setRadioBtn(!radioBtn)}>
                <Image
                  source={radioBtn ? images.btnOn : images.btnOff}
                  style={styles.btnIconImgSty}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.bottomBtn} 
        onPress={handleLogout}
        >
          <Image source={images.logout} style={styles.forwardIcon} />
          <Text style={styles.bottomBtnText}>Logout</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
