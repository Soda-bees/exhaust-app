import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Platform,
  RefreshControl,
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
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQtyByOneRedux, deleteCartRedux, increaseQtyByOneRedux, selectUserData } from '../../store/userData';
import formatToJSON from '../../services/utilities/JsonLog';
import { decCartByOne, deleteToCart, incCartByOne } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';
import Modal from "react-native-modal"

export default function MyCart({ navigation, route }) {

  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)
  console.log(userData?.cart.length);

  const [quantity, setQuantity] = useState(0);
  const [quantityTwo, setQuantityTwo] = useState(0);
  const [quantityThree, setQuantityThree] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0)
  const [subTotalAmount, setSubTotalAmount] = useState(0)
  const [shipping, setShipping] = useState(34)
  const [loadingItems, setLoadingItems] = useState([]);
  const [cartIncDecLoader, setCartIncDecLoader] = useState([]);
  const [refreshLoader, setRefreshLoader] = useState(false)
  const [isPermissionModal, setIsPermissionModal] = useState(false)
  const [deleteCard_id, setDeleteCard_id] = useState('')
  const [modalLoader, setModalLoader] = useState(false)

  useEffect(() => {
    const cart = userData.cart
    const totalAmount = calculateTotalAmount(cart)
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

  const handleDeleteCart = async (_id) => {
    setLoadingItems([...loadingItems, _id]);
    setModalLoader(true)
    try {
      const response = await deleteToCart(authToken, _id)
      if (response.success) {
        dispatch(deleteCartRedux({ _id }))
        setLoadingItems(loadingItems.filter((id) => id !== _id));
        setModalLoader(false)
        setIsPermissionModal(false)
      } else {
        console.log(response.message);
        setLoadingItems(loadingItems.filter((id) => id !== _id));
        setModalLoader(false)
        setIsPermissionModal(false)
      }
    } catch (error) {
      console.log(error);
      setLoadingItems(loadingItems.filter((id) => id !== _id));
      setModalLoader(false)
      setIsPermissionModal(false)
    }
  };

  const handleIncCartByOne = async (_id) => {
    setCartIncDecLoader([...cartIncDecLoader, _id]);
    try {
      const response = await incCartByOne(authToken, _id)
      if (response.success) {
        dispatch(increaseQtyByOneRedux({ _id }))
        setCartIncDecLoader(cartIncDecLoader.filter((id) => id !== _id))
      } else {
        console.log(response.message);
        setCartIncDecLoader(cartIncDecLoader.filter((id) => id !== _id))
      }
    } catch (error) {
      console.log(error.message);
      setCartIncDecLoader(cartIncDecLoader.filter((id) => id !== _id))
    }
  }

  const handleDecCartByOne = async (_id) => {
    try {
      setCartIncDecLoader([...cartIncDecLoader, _id]);
      const response = await decCartByOne(authToken, _id)
      console.log(response);
      if (response.success) {
        dispatch(decreaseQtyByOneRedux({ _id }))
        setCartIncDecLoader(cartIncDecLoader.filter((id) => id !== _id))
      } else {
        console.log(response.message);
        setCartIncDecLoader(cartIncDecLoader.filter((id) => id !== _id))
      }
    } catch (error) {
      console.log(error.message);
      setCartIncDecLoader(cartIncDecLoader.filter((id) => id !== _id))
    }
  }

  const scrollViewFunction = async () => {
    setRefreshLoader(true)
    setTimeout(() => {
      setRefreshLoader(false)
    }, 200)
  }

  const handleCloseModal = () => {
    if (!modalLoader) {
      setIsPermissionModal(false)
    }
  }
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerBackIcon} source={images.backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>My Cart</Text>
        </View>
        {
          userData?.cart.length > 0 ?
            <View style={styles.scrollBody}>
              <View style={styles.scrollViewParent}>
                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshLoader}
                      onRefresh={() => { scrollViewFunction() }}
                      colors={[colors.btnBlue]}
                      progressBackgroundColor="white"
                    />
                  }
                  showsVerticalScrollIndicator={false}>
                  {
                    userData?.cart && userData?.cart.map((item, index) => {
                      return (
                        <View key={index} style={styles.itemContainer}>
                          <TouchableOpacity style={styles.itemDetails}
                            onPress={() =>
                              navigation.navigate('AddToCartDetails', {
                                data: item,
                              })
                            }
                          >
                            <View style={styles.ferrariF12ExhaustContainer}>
                              <Image
                                style={styles.ferrariF12Exhaust}
                                source={{ uri: item?.product?.images[0] }}
                              />
                            </View>
                            <View>
                              <Text style={styles.brandName}>{item?.product?.brand?.name}</Text>
                              <Text style={styles.exhaustType}>{item?.product?.name}</Text>
                              <Text style={styles.exhaustPrice}>{`$${item?.product?.price}.00`}</Text>
                            </View>
                          </TouchableOpacity>
                          <View style={styles.deleteAndQuantityContainer}>
                            {
                              loadingItems.includes(item._id) ?
                                <View>
                                  <ActivityIndicator color={colors.btnBlue} size={22} />
                                </View>
                                :
                                <TouchableOpacity onPress={() => {
                                  setDeleteCard_id(item._id)
                                  setIsPermissionModal(true)
                                }}>
                                  <Image style={styles.deleteIcon} source={images.deleteIcon} />
                                </TouchableOpacity>
                            }
                            {
                              cartIncDecLoader.includes(item._id) ?
                                <View style={styles.quantityContainer2}>
                                  <ActivityIndicator color={colors.btnBlue} size={20} />
                                </View>
                                :
                                <View style={loadingItems.includes(item._id) ? styles.quantityContainer2 : styles.quantityContainer}>
                                  <TouchableOpacity
                                    onPress={() => { item.qty > 1 && handleDecCartByOne(item._id) }}
                                  >
                                    <Text style={styles.textQuantityMinus}>_</Text>
                                  </TouchableOpacity>
                                  <Text style={styles.textQuantity}>{item?.qty}</Text>
                                  <TouchableOpacity
                                    onPress={() => { handleIncCartByOne(item._id) }}
                                  >
                                    <Text style={styles.textQuantityPlus}>+</Text>
                                  </TouchableOpacity>
                                </View>

                            }

                          </View>
                        </View>
                      )
                    }).reverse()
                  }
                </ScrollView>
              </View>
              <View style={Platform.OS == 'android' ? styles.promoSty : styles.promoStyIOS}>
                <TextInput
                  placeholder="Promo Code"
                  placeholderTextColor={colors.disabledBg3}
                  style={styles.inputFieldIOS}
                />
                <TouchableOpacity>
                  <Text style={Platform.OS == 'android' ? styles.promoSty2 : styles.promoSty2IOS}>Apply</Text>
                </TouchableOpacity>
              </View>
              <View>
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
              </View>
              <TouchableOpacity
                style={Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS}
                onPress={() => navigation.navigate('Checkout')}>
                <Text style={styles.bottomBtnText}>Proceed to Checkout</Text>
                <Image source={images.forwardIcon} style={styles.forwardIcon} />
              </TouchableOpacity>
            </View>
            :
            <View style={styles.noCartContainer}>
              <Image source={images.emptyCart} style={styles.emptyCartImg} />
              <Text style={styles.noCartText}>No items found in the cart.</Text>
            </View>
        }
        <Modal isVisible={isPermissionModal} onBackdropPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <Image source={images.deleteCart} style={styles.deleteCartImg} />
            <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
            <View style={styles.modalBtnContainer}>
              {
                modalLoader ?
                  <View style={styles.noBtn}>
                    <Text style={styles.modlBtnText2}>No</Text>
                  </View>
                  :
                  <TouchableOpacity style={styles.noBtn} onPress={handleCloseModal} >
                    <Text style={styles.modlBtnText2}>No</Text>
                  </TouchableOpacity>
              }
              {
                modalLoader ?
                  <View style={styles.yesBtn}>
                    <ActivityIndicator color={colors.white} size={25} />
                  </View>
                  :
                  <TouchableOpacity style={styles.yesBtn}
                    onPress={() => handleDeleteCart(deleteCard_id)}
                  >
                    <Text style={styles.modlBtnText}>Yes</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}
