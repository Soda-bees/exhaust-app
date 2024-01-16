import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import { colors, sizes } from '../../services';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/userData';

export default function Checkout({ navigation }) {

  const userData = useSelector(selectUserData)

  const [isModalVisisble, setIsModalVisisble] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0)
  const [subTotalAmount, setSubTotalAmount] = useState(0)
  const [shipping, setShipping] = useState(34)

  useEffect(() => {
    const cart = userData.cart
    const totalAmount = calculateTotalAmount(cart)
    console.log(totalAmount , "checkout");
    setTotalAmount(totalAmount)
    setSubTotalAmount(totalAmount + shipping)
  }, [userData])

  const calculateTotalAmount = (cart) => {
    // Use reduce to iterate through the cart and accumulate the total amount
    const totalAmount = cart.reduce((accumulator, cartItem) => {
      // Ensure cartItem.product and cartItem.qty exist
      if (cartItem.product && cartItem.qty) {
        // Multiply the product price by the quantity and add to the accumulator
        return accumulator + cartItem.product.price * cartItem.qty;
      } else {
        // If any necessary information is missing, return the accumulator unchanged
        return accumulator;
      }
    }, 0); // Initialize accumulator to 0

    return totalAmount;
  };

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Checkout'} backImage={images.backIcon} navigate={'MyCart'} addToCartImage={images.cartIcon} />
      <View style={{ height:sizes.screenHeight* 0.9 , flexDirection:'column',
    justifyContent:'space-between'
    }}>

        <View style={styles.mainContainer}>
          <View style={styles.topTextView}>
            <Text style={styles.topTextSty1}>Shipping address</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddShippingAddress')}>
              <Text style={styles.topTextSty2}>Add new Address</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.MainCartView}>
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
          </View> */}
          <View style={styles.topTextView}>
            <Text style={styles.topTextSty1}>Payment</Text>
            <TouchableOpacity
              onPress={() => setIsModalVisisble(!isModalVisisble)}>
              <Text style={styles.topTextSty2}>Add Card</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.MainCartView2}>
            <View style={styles.row}>
              <Image source={images.mastercard} style={styles.cardIcon} />
              <Text style={styles.firstCartText}>**** **** **** 3947</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentMethod')}>
              <Text style={styles.firstCartText1}>Change</Text>
            </TouchableOpacity>
          </View> */}
        </View>

        <View >
        <View style={styles.pricesStyling}>
          <Text style={styles.priceText1}>Shipping:</Text>
          <Text style={styles.priceNumber1}>{`$${shipping}.0`}</Text>
        </View>
        <View style={styles.pricesStyling}>
          <Text style={styles.priceText1}>Sub Total:</Text>
          <Text style={styles.priceNumber1}>{`$${totalAmount}.0`}</Text>
        </View>
        <View style={styles.pricesStyling2}>
          <Text style={styles.priceText2}>{`Total(${userData?.cart?.length} items):`}</Text>
          <Text style={styles.priceNumber2}>{`$${subTotalAmount}.0`}</Text>
        </View>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={() => navigation.navigate('OrderConfirm')}>
          <Text style={styles.bottomBtnText}>Submit Order</Text>
          <Image source={images.forwardIcon} style={styles.forwardIcon} />
        </TouchableOpacity>
        </View>
        </View>

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
