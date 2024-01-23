import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './style';
import images from '../../services/utilities/images';
import { colors } from '../../services';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../store/brands';

export default function Brands({ navigation }) {
  const brandData = useSelector(selectBrands)
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerBackIcon} source={images.backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Brands</Text>
          {/* <TouchableOpacity>
            <Image style={styles.headerIcon} source={images.seacrchIcon} />
          </TouchableOpacity> */}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {brandData.map((item, index) => {
            return (
              <View style={styles.test} key={index}>
                <TouchableOpacity style={styles.brandContainer} onPress={() => navigation.navigate('ProductsBrand' , {item})}>
                  <View style={styles.brandIconContainer}>
                    <Image style={styles.brandIcon} source={{ uri: item.logo }} />
                  </View>
                  <View style={styles.separator}></View>
                  <Text style={styles.brandName}>{item.name.toUpperCase()}</Text>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Text style={styles.quantity}> Exhaust</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
          <View style={styles.merginView}></View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}


