import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import images from '../../services/utilities/images';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/userData';

export default function Header({ backImage, title, addToCartImage, navigate }) {
  const navigation = useNavigation();
  const userData = useSelector(selectUserData)
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backImage} style={styles.imgSty} />
        </TouchableOpacity >
        <Text style={styles.headerText}>{title}</Text>


        <TouchableOpacity onPress={() => navigation.navigate(navigate)} style={styles.cartImgTouchable}>
          {
            userData?.cart?.length > 0 &&
            <View style={styles.notificationView}>
              <Text style={styles.text}>{userData?.cart?.length}</Text>
            </View>
          }
          <Image source={addToCartImage} style={styles.cartImgSty} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
