import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors} from '../../services';

export default function AddShippingAddress({navigation}) {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header
          title={'Adding Shipping Addresses'}
          backImage={images.backIcon}
        />
        <View style={styles.mainContainer}>
          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Address</Text>
            <TextInput
              placeholder="3 Newbrifge Court"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>City</Text>
            <TextInput
              placeholder="Chino Hills"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>State/Province/Region</Text>
            <TextInput
              placeholder="California"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Zip Code (Postal Code)</Text>
            <TextInput
              placeholder="91709"
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Country</Text>
            <View style={styles.row}>
              <TextInput
                placeholder="United States"
                placeholderTextColor={colors.black}
                style={styles.inputField}
              />
              <TouchableOpacity>
                <Image source={images.rightArrow} style={styles.arrowSizing} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.bottomBtnText}>Save Address</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
