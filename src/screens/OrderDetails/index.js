import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';

export default function OrderDetails() {
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Order details'} backImage={images.backIcon} />
        <View style={styles.mainContainer}>
          <View style={styles.firstViewRow}>
            <Text style={styles.firstViewText}>18 Dec, 2023</Text>
            <TouchableOpacity>
              <Text style={styles.firstViewText1}>Delivered</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.firstViewText2}>#59890045678</Text>
          <Text style={styles.firstViewText}>18 Dec, 2023</Text>
          <Text style={styles.firstViewText2}>
            8502 Preston Rd. Inglewood, Maine 98380
          </Text>
          <Text style={styles.firstViewText}>Payment Method</Text>
          <View style={styles.firstViewRow2}>
            <Text style={styles.firstViewText3}>Master Card</Text>
            <Image source={images.cardIcon} style={styles.imageSize} />
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.firstViewRow}>
            <Text style={styles.secondViewText}>F12 Tail Throat Downpipe</Text>
            <TouchableOpacity>
              <Text style={styles.firstViewText1}>$250.00</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.firstViewText}>Single</Text>
          <View style={styles.firstViewRow}>
            <Text style={styles.secondViewText}>F12 Tail Throat Downpipe</Text>
            <TouchableOpacity>
              <Text style={styles.firstViewText1}>$250.00</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.firstViewText}>Single</Text>
          <View style={styles.horizontalLine}></View>
          <View style={styles.firstViewRow}>
            <Text style={styles.firstViewText}>Item Total</Text>
            <TouchableOpacity>
              <Text style={styles.firstViewText1}>$34.00</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.firstViewRow}>
            <Text style={styles.firstViewText}>Delivery Charges</Text>
            <TouchableOpacity>
              <Text style={styles.firstViewText1}>$960.00</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.firstViewRow}>
            <Text style={styles.secondViewText}>Paid</Text>
            <TouchableOpacity>
              <Text style={styles.bold}>$1003.00</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.bottomBtn}>
            <Text style={styles.bottomBtnText}>Re-order</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
