import { View, Text, ImageBackground, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import {useState} from 'react'
import Header from '../../components/Header'
import { styles } from './style'
import images from '../../services/utilities/images'

export default function ShippingAddresses() {
  const [cardStatus, setCardStatus] = useState('');

  return (
   <SafeAreaView>
    <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Shipping Addresses'} backImage={images.backIcon} />
        <View style={styles.mainContainer}>
        <View style={styles.MainCartView}>
            <View style={styles.firstCart}>
              <Text style={styles.firstCartText}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={styles.firstCartText1}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.firstCartText}>3 Newbridge Court</Text>
            <Text style={styles.firstCartText}>
              Chino Hills, CA 91709, United States
            </Text>
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
          <Text style={styles.headingSty2}>Use as the shipping address </Text>
        </View>
          </View>
          <View View style={styles.MainCartView}>
            <View style={styles.firstCart}>
              <Text style={styles.firstCartText}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={styles.firstCartText1}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.firstCartText}>3 Newbridge Court</Text>
            <Text style={styles.firstCartText}>
              Chino Hills, CA 91709, United States
            </Text>
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
          <Text style={styles.headingSty2}>Use as the shipping address </Text>
        </View>
          </View>
          <View View style={styles.MainCartView}>
            <View style={styles.firstCart}>
              <Text style={styles.firstCartText}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={styles.firstCartText1}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.firstCartText}>3 Newbridge Court</Text>
            <Text style={styles.firstCartText}>
              Chino Hills, CA 91709, United States
            </Text>
            <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setCardStatus('Third');
            }}>
            <Image
              source={
                cardStatus == 'Third' ? images.checkboxon : images.checkboxoff
              }
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.headingSty2}>Use as the shipping address </Text>
        </View>
          </View>
        </View>
        </ImageBackground>
   </SafeAreaView>
  )
}