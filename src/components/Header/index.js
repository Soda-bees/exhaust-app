import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {useNavigation} from '@react-navigation/native';

export default function Header({backImage, title, addToCartImage}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Image source={backImage} style={styles.imgSty} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity>
          <Image source={addToCartImage} style={styles.cartImgSty} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
