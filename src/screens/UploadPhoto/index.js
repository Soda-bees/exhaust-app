import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {launchImageLibrary} from 'react-native-image-picker';
import { sizes } from '../../services';

export default function UploadPhoto({navigation}) {
  const [imgUri, setImgUri] = useState('');
  const handleUploadPhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log(res.assets[0]);
        const img = res.assets[0];
        setImgUri(img.uri);
        // handleUploadProfile(img);
      }
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backIcon} />
        <View style={styles.TopView}>
          {imgUri ? (
            <Image source={{uri: imgUri}} style={[styles.profileImgSiz,styles.roundedBorder]} />
          ) : (
            <Image source={images.profileUpload} style={styles.profileImgSiz} />
          )}
          <Text style={styles.profileHeading}>A photo of you</Text>
          <Text style={styles.profilePara}>
            Please make sure your photo clearly
          </Text>
          <Text style={styles.profilePara}>shows your face</Text>
          <TouchableOpacity
            style={styles.bottomBtn}
            onPress={handleUploadPhoto}>
            <Text style={styles.bottomBtnText}>Upload Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomBtn2}
            onPress={() => navigation.navigate('MyTabs')}>
            <Text style={styles.bottomBtnText2}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
