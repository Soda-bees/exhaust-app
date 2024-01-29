import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/userData';

export default function OrderConfirm({ navigation }) {

  useEffect(() => {
    const handleBackButton = () => {
      navigation.push('MyTabs');
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      backHandler.remove();
    };
  }, [navigation]);

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View style={styles.mainContainer}>
          <Image source={images.tickConfirm} style={styles.tickImg} />
          <Text style={styles.textSty1}>Order Confirmed</Text>
          <Text style={styles.textSty2}>
            Thank you for choosing
            <Text style={styles.textBold}> CSZ EXHAUST!</Text> We are pleased to
            confirm your recent order with us. Below are the details of your
            purchase:
          </Text>
          <TouchableOpacity style={styles.bottomBtn1} onPress={() => navigation.push('MyTabs')}>
            <Text style={styles.bottomBtnText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
