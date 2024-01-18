import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { useState } from 'react';
import { styles } from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/userData';

export default function PaymentMethod() {

  const userData = useSelector(selectUserData)

  const [cardStatus, setCardStatus] = useState('');
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>
          <Header title={'Payment methods '} backImage={images.backIcon} />
          <View style={styles.mainContainer}>
            <Text style={styles.headingSty}>Your Payment cards</Text>
            {
              userData.cards.length > 0 ?
                <ScrollView showsVerticalScrollIndicator={false}>
                  {
                    userData.cards.map((item, index) => {
                      return (
                        <ImageBackground key={index}
                          resizeMode='contain'
                          source={images.cardBlue} style={styles.card}>
                          <Text>{`**** **** **** ${String(item.cardNumber).substring(String(item.cardNumber).length - 4)}`}</Text>
                          <View>
                            <View>
                              <Text>Card Holder Name</Text>
                              <Text>{item.name}</Text>
                            </View>
                            <View>
                              <Text>Expiry Date</Text>
                              <Text>{item.expireDate}</Text>
                            </View>
                          </View>
                        </ImageBackground>
                      )
                    })
                  }
                  {/* <Image source={images.cardTwo} style={styles.card} />
        <Image source={images.cardTwo} style={styles.card} />
        <Image source={images.cardTwo} style={styles.card} /> */}
                </ScrollView>
                :
                <Text>no cards</Text>
            }
            {/* <Image source={images.card} style={styles.card} /> */}
            {/* <View style={styles.row}>
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
        </View> */}
            {/* <View style={styles.row}>
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
        </View> */}
          </View>
        </View>
        <Text>Add new card</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}
