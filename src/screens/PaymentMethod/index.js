import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

export default function PaymentMethod() {
  const [cardStatus, setCardStatus] = useState('');
  return (
    <SafeAreaView>
    <ImageBackground style={styles.container} source={images.bg}>
      <Header title={'Payment methods '} backImage={images.backIcon} />
      <View style={styles.mainContainer}>
        <Text style={styles.headingSty}>Your Payment cards</Text>
        <Image source={images.card} style={styles.card} />
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setCardStatus('First');
            }}>
            <Image
              source={
                cardStatus == 'First' ? images.checkboxon : images.checkboxoff
              }
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.headingSty2}>Use as default payment method</Text>
        </View>
        <Image source={images.cardTwo} style={styles.card} />
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setCardStatus('Second');
            }}>
            <Image
              source={
                cardStatus == 'Second' ? images.checkboxon : images.checkboxoff
              }
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.headingSty2}>Use as default payment method</Text>
        </View>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
}
