import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import { colors, sizes } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { addCardRedux, addNewOrderRedux, emptyCartRedux, removeOrderRedux, selectUserData, updateCardRedux } from '../../store/userData';
import formatToJSON from '../../services/utilities/JsonLog';
import Loader from '../../components/Loader';
import { addCard, order, updateCard } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';

export default function Checkout({ navigation, route }) {

  const dispatch = useDispatch()
  const item = route.params?.item;

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)
  console.log(userData.orders.length);

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
  const [selectedCard, setSelectedCard] = useState()
  const [editCard, setEditcard] = useState(false)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const cart = userData.cart
    const shippingAddress = userData.shippingAddress
    const totalAmount = calculateTotalAmount(cart)
    const selectedAddress = userData.shippingAddress.filter((address) => address.selected)
    setSelectedAddress(selectedAddress[0]);
    const selectedCard = userData.cards.filter((address) => address.selected)
    setSelectedCard(selectedCard[0]);
    setTotalAmount(totalAmount)
    setSubTotalAmount(totalAmount + shipping)
  }, [userData])

  useEffect(() => {
    if (route.params && item) {
      if (item.isEdit) {
        const { data } = item
        setEditcard(true)
        setIsModalVisisble(true)
        setName(data?.name)
        setCardNumber(String(data?.cardNumber))
        setExpireDate(data?.expireDate)
        setCvv(String(data?.cvv))
      } else {
        setIsModalVisisble(true)
        setEditcard(false)
      }
    }
  }, [route.params, item]);

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
        setName('')
        setCardNumber('')
        setExpireDate('')
        setCvv('')
        setAddCardError('')
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

  const handleEditCard = async () => {
    try {
      setaddCardLoader(true)
      const obj = {
        cardId: item?.data?._id,
        name,
        cardNumber,
        expireDate,
        cvv,
        selected: item?.data?.selected,
        userId: item?.data?.userId
      }
      const response = await updateCard(authToken, obj)
      console.log(formatToJSON(response));
      if (response.success) {
        const updatedCard = response.updatedCard
        dispatch(updateCardRedux(updatedCard))
        setName('')
        setCardNumber('')
        setExpireDate('')
        setCvv('')
        navigation.navigate('PaymentMethod')
        setEditcard(false)
        setIsModalVisisble(false)
        setaddCardLoader(false)
      } else {
        setAddCardError(response.message)
        setaddCardLoader(false)
      }
    } catch (error) {
      console.log(error.message);
      setaddCardLoader(false)
    }
  }

  const handleOpenModal = () => {
    setEditcard(false)
    setIsModalVisisble(true)
  }

  const handleConfirmOrder = async () => {
    try {
      setLoader(true)
      let products = []
      userData.cart.forEach(cartItem => {
        const productInfo = {
          product: cartItem.product,
          qty: cartItem.qty,
        };
        products.push(productInfo);
      });
      const obj = {
        shippingAddress: selectedAddress._id,
        status: 'Processing',
        paymentMethod: 'master card',
        paid:totalAmount,
        shipping
      }
      obj.products = products
      const response = await order(authToken, obj)
      if (response.success) {
        const newOrder = response.newOrder
        dispatch(addNewOrderRedux(newOrder))
        dispatch(emptyCartRedux())
        navigation.navigate("OrderConfirm")
        setLoader(false)
      } else {
        setLoader(false)
        console.log(response.message);
      }
    } catch (error) {
      setLoader(false)
      console.log(error);
    }
  }

  const handleFormatCardNumber = (text) => {
    const formattedText = text.replace(/\D/g, '');
    const formattedCardNumber = formattedText.replace(/(\d{4})/g, '$1 ');
    setCardNumber(formattedCardNumber.trim());
  };

  const handleFormatExpiryDate = (text) => {
    const formattedText = text.replace(/[^0-9]/g, '');

    if (formattedText.length > 2) {
      const formattedExpiryDate = formattedText.replace(/(\d{2})(\d{0,2})/, '$1/$2');
      setExpireDate(formattedExpiryDate);
    } else {
      setExpireDate(formattedText);
    }
  };


  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header title={'Checkout'} backImage={images.backIcon} navigate={'Store'}
          addToCartImage={images.cartIcon}
        />
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
              </View>
            }

            <View style={styles.topTextView}>
              <Text style={styles.topTextSty1}>Payment</Text>
              <TouchableOpacity
                onPress={() =>
                  selectedCard ?
                    handleOpenModal()
                    :
                    navigation.navigate('PaymentMethod')
                }
              >
                <Text style={styles.topTextSty2}>{selectedCard ? "Add new card" : "Select card"}</Text>
              </TouchableOpacity>
            </View>
            {
              selectedCard &&
              <View style={styles.MainCartView2}>
                <View style={styles.row}>
                  <Image source={images.mastercard} style={styles.cardIcon} />
                  <Text style={styles.firstCartText}>{`**** **** **** ${String(selectedCard.cardNumber).substring(String(selectedCard.cardNumber).length - 4)}`}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PaymentMethod')}>
                  <Text style={styles.firstCartText1}>Change</Text>
                </TouchableOpacity>
              </View>
            }

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
            {
              loader ?
                <View style={styles.bottomBtn}>
                  <Text style={styles.bottomBtnText}>Submit Order</Text>
                  <ActivityIndicator color={colors.white} size={31} />
                </View>
                :
                selectedAddress && selectedCard ?
                  <TouchableOpacity
                    style={styles.bottomBtn}
                    onPress={() => {
                      handleConfirmOrder();
                    }}
                  >
                    <Text style={styles.bottomBtnText}>Submit Order</Text>
                    <Image source={images.forwardIcon} style={styles.forwardIcon} />
                  </TouchableOpacity>
                  :
                  <View
                    style={

                      styles.bottomBtnDisable
                    }

                  >
                    <Text style={styles.bottomBtnText}>Submit Order</Text>
                    <Image source={images.forwardIcon2} style={styles.forwardIcon} />
                  </View>
            }

          </View>
        </View>

        <Modal
          isVisible={isModalVisisble}
          backdropOpacity={0.3}
          onBackdropPress={() => {
            setName('')
            setCardNumber('')
            setExpireDate('')
            setCvv('')
            setIsModalVisisble(false)
          }
          }
        >
          <View style={styles.modalBody}>
            <View style={styles.modalMainView}>
              <View style={styles.horizontalLine}></View>
              <Text style={styles.modalHeading} >{`${editCard ? "Update card" : "Add New Card"}`}</Text>
              <View style={styles.modalInputField2}>
                <Text style={styles.inputFieldLabel}>Name on card</Text>
                <TextInput
                  placeholder="Enter name"
                  style={styles.textInputField2}
                  placeholderTextColor={colors.disabledBg3}
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>Card Number</Text>
                  <TextInput
                    placeholder="Enter card number"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.disabledBg3}
                    inputMode="numeric"
                    onChangeText={handleFormatCardNumber}
                    value={cardNumber}
                    maxLength={19}
                  />
                </View>
                <Image source={images.mastercardTwo} style={styles.imageSize} />
              </View>
              <View style={styles.modalInputField2}>
                <Text style={styles.inputFieldLabel}>Expiry Date</Text>
                <TextInput
                  placeholder="Enter expire date"
                  style={styles.textInputField2}
                  placeholderTextColor={colors.disabledBg3}
                  inputMode="numeric"
                  onChangeText={handleFormatExpiryDate}
                  value={expireDate}
                  maxLength={5}
                />
              </View>
              <View style={styles.modalInputField2}>
                <View>
                  <Text style={styles.inputFieldLabel}>CVV</Text>
                  <TextInput
                    placeholder="Enter CVV"
                    style={styles.textInputField2}
                    placeholderTextColor={colors.disabledBg3}
                    inputMode="numeric"
                    onChangeText={(text) => setCvv(text)}
                    value={cvv}
                    maxLength={3}
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
                    onPress={() => {
                      editCard ?
                        handleEditCard()
                        :
                        handleAddCard()
                    }}
                    style={styles.modalBottomBtn}>
                    <Text style={styles.bottomBtnText}>
                      {`${editCard ? "Update card" : "Add card"}`}
                    </Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
