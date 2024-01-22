import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors} from '../../services';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/userData';

export default function EditProfile({navigation}) {

  const userData = useSelector(selectUserData)

  

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Profile'} backImage={images.backIcon} />
        <View style={styles.mainContainer}>
          <Image source={images.profileImg} style={styles.profileImgSty} />
          <TouchableOpacity style={styles.editImgView} onPress={() => navigation.navigate('UploadProfilePhoto')}>
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
              />
            </View>
          </View>
          <View>
            <Text style={styles.labelTextSty}>Email</Text>
            <View style={styles.fieldView}>
              <Image source={images.email} style={styles.iconImgSty} />
              <View style={styles.verticalLine}></View>
              <TextInput
                placeholder="Your Email"
                placeholderTextColor={colors.lightGrey}
                style={styles.textSty}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labelTextSty}>Phone</Text>
            <View style={styles.fieldView}>
              <Image source={images.phone} style={styles.iconImgSty} />
              <View style={styles.verticalLine}></View>
              <TextInput
                placeholder="Your Phone Number"
                placeholderTextColor={colors.lightGrey}
                keyboardType="numeric"
                style={styles.textSty}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate('MyTabs')}>
          <Text style={styles.bottomBtnText}>Save</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
