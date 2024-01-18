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
import { useDispatch, useSelector } from 'react-redux';
import { addCardRedux, selectUserData } from '../../store/userData';
import formatToJSON from '../../services/utilities/JsonLog';
import Loader from '../../components/Loader';
import { addCard } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';

export default function Checkout({ navigation }) {

  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)
  console.log(userData.cards.length);

  const [isModalVisisble, setIsModalVisisble] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0)
  const [subTotalAmount, setSubTotalAmount] = useState(0)
  const [shipping, setShipping] = useState(34)
  const [selectedAddress, setSelectedAddress] = useState()
  const [addCardLoader, setaddCardLoader] = useState(false)
  const [addCardError, setAddCardError] = useState('')
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState()
  const [expireDate, setExpireDate] = useState('')
  const [cvv, setCvv] = useState()

  useEffect(() => {
    const cart = userData.cart
    const shippingAddress = userData.shippingAddress
    const totalAmount = calculateTotalAmount(cart)
    const selectedAddress = userData.shippingAddress.filter((address) => address.selected)
    setSelectedAddress(selectedAddress[0]);
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
  const handleAddCard = async () => {
    setaddCardLoader(true)
    try {
      const obj = {
        name,
        cardNumber,
        expireDate,
        cvv
      }
      const response = await addCard(authToken, obj)
      if (response.success) {
        const newCard = response.newCard
        dispatch(addCardRedux(newCard))
        setaddCardLoader(false)
        setIsModalVisisble(false)
      } else {
        setAddCardError(response.message)
        setaddCardLoader(false)
      }
    } catch (error) {
      console.log(error.message);
      setAddCardError(error.message)
      setaddCardLoader(false)
    }
  }
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Checkout'} backImage={images.backIcon} navigate={'MyCart'} addToCartImage={images.cartIcon} />
        <View style={{
          height: sizes.screenHeight * 0.9, flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <View style={styles.mainContainer}>
            <View style={styles.topTextView}>
              <Text style={styles.topTextSty1}>Shipping address</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(selectedAddress ? 'AddShippingAddress' : "ShippingAddresses")
                }
              >
                <Text style={styles.topTextSty2}>{selectedAddress ? "Add new address" : "Select address"}</Text>
              </TouchableOpacity>

            </View>
            {
              selectedAddress &&
              <View style={styles.MainCartView}>
                <View style={styles.firstCart}>
                  <Text style={styles.firstCartText}>{userData.name}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ShippingAddresses')}>
                    <Text style={styles.firstCartText1}>Change</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.firstCartText}>{selectedAddress.address}</Text>
                <Text style={styles.firstCartText}>
                  {`${selectedAddress.city}, ${selectedAddress.zipCode}, ${selectedAddress.state}, ${selectedAddress.country}`}
                </Text>
                {/* <Text  style={styles.firstCartText}>{selectedAddress.phone}</Text> */}
              </View>
            }

            <View style={styles.topTextView}>
              <Text style={styles.topTextSty1}>Payment</Text>
              <TouchableOpacity
                // onPress={() => setIsModalVisisble(!isModalVisisble)}
                onPress={()=> navigation.navigate('PaymentMethod')}
                >
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
              <View style={styles.modalInputField2}>
                <Text style={styles.inputFieldLabel}>Name on card</Text>
                <TextInput
                  placeholder="Enter name"
                  style={styles.textInputField2}
                  placeholderTextColor={colors.black}
                  inputMode="numeric"
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>Card Number</Text>
                  <TextInput
                    placeholder="Exter card number"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.black}
                    inputMode="numeric"
                    onChangeText={(text) => setCardNumber(text)}
                    value={cardNumber}
                  />
                </View>
                <Image source={images.mastercardTwo} style={styles.imageSize} />
              </View>
              <View style={styles.modalInputField2}>
                <Text style={styles.inputFieldLabel}>Expiry Date</Text>
                <TextInput
                  placeholder="Enter expire"
                  style={styles.textInputField2}
                  placeholderTextColor={colors.black}
                  inputMode="numeric"
                  onChangeText={(text) => setExpireDate(text)}
                  value={expireDate}
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>CVV</Text>
                  <TextInput
                    placeholder="Enter cvv"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.black}
                    inputMode="numeric"
                    onChangeText={(text) => setCvv(text)}
                    value={cvv}
                  />
                </View>
                <Image source={images.help} style={styles.imageSize} />
              </View>
              <Text style={styles.errorMessageText}>{addCardError}</Text>
              {
                addCardLoader ?
                  <View style={styles.loaderContainer}>
                    <Loader />
                  </View>
                  :
                  <TouchableOpacity
                    onPress={handleAddCard}
                    // onPress={() => setIsModalVisisble(false)}
                    style={styles.modalBottomBtn}>
                    <Text style={styles.bottomBtnText}>Submit Order</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
