import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import {colors} from '../../services';

export default function Checkout({navigation}) {
  const [isModalVisisble, setIsModalVisisble] = useState(false);
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Checkout'} backImage={images.backIcon} />
        <View style={styles.mainContainer}>
          <View style={styles.topTextView}>
            <Text style={styles.topTextSty1}>Shipping address</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddShippingAddress')}>
              <Text style={styles.topTextSty2}>Add new Address</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MainCartView}>
            <View style={styles.firstCart}>
              <Text style={styles.firstCartText}>Jane Doe</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ShippingAddresses')}>
                <Text style={styles.firstCartText1}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.firstCartText}>3 Newbridge Court</Text>
            <Text style={styles.firstCartText}>
              Chino Hills, CA 91709, United States
            </Text>
          </View>
          <View style={styles.topTextView}>
            <Text style={styles.topTextSty1}>Payment</Text>
            <TouchableOpacity
              onPress={() => setIsModalVisisble(!isModalVisisble)}>
              <Text style={styles.topTextSty2}>Add Card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MainCartView2}>
            <View style={styles.row}>
              <Image source={images.mastercard} style={styles.cardIcon} />
              <Text style={styles.firstCartText}>**** **** **** 3947</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentMethod')}>
              <Text style={styles.firstCartText1}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pricesStyling}>
          <Text style={styles.priceText1}>Shipping:</Text>
          <Text style={styles.priceNumber1}>$34.0</Text>
        </View>
        <View style={styles.pricesStyling}>
          <Text style={styles.priceText1}>Sub Total:</Text>
          <Text style={styles.priceNumber1}>$960.0</Text>
        </View>
        <View style={styles.pricesStyling2}>
          <Text style={styles.priceText2}>Total(3 items):</Text>
          <Text style={styles.priceNumber2}>$1003.0</Text>
        </View>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate('OrderConfirm')}>
          <Text style={styles.bottomBtnText}>Submit Order</Text>
          <Image source={images.forwardIcon} style={styles.forwardIcon} />
        </TouchableOpacity>
        <Modal
          // visible={isModalVisisble}
          isVisible={isModalVisisble}
          backdropOpacity={0.3}
          onBackdropPress={() => setIsModalVisisble(false)}>
          <View style={styles.modalBody}>
            <View style={styles.modalMainView}>
              <View style={styles.horizontalLine}></View>
              <Text style={styles.modalHeading}>Add New Card</Text>
              <View style={styles.modalInputField}>
                <TextInput
                  placeholder="Name on card"
                  style={styles.textInputField}
                  placeholderTextColor={colors.disabledBg3}
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>Card Number</Text>
                  <TextInput
                    placeholder="5546 8205 3693 3947"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.black}
                    inputMode="numeric"
                  />
                </View>
                <Image source={images.mastercardTwo} style={styles.imageSize} />
              </View>
              <View style={styles.modalInputField2}>
                <Text style={styles.inputFieldLabel}>Expiry Date</Text>
                <TextInput
                  placeholder="05/23"
                  style={styles.textInputField2}
                  placeholderTextColor={colors.black}
                  inputMode="numeric"
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>CVV</Text>
                  <TextInput
                    placeholder="567"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.black}
                    inputMode="numeric"
                  />
                </View>
                <Image source={images.help} style={styles.imageSize} />
              </View>
              <TouchableOpacity onPress={() => setIsModalVisisble(false)}
                style={styles.modalBottomBtn}>
                <Text style={styles.bottomBtnText}>Submit Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
