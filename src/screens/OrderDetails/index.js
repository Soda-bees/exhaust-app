import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import { deleteOrderRedux, selectUserData } from '../../store/userData';
import { useDispatch, useSelector } from 'react-redux';
import formatToJSON from '../../services/utilities/JsonLog';
import Loader from '../../components/Loader';
import { cancelOrder } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';
import Modal from "react-native-modal"
import { colors } from '../../services';

export default function OrderDetails({ navigation, route }) {

  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)
  const { orderData } = route.params

  const [date, setDate] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const [orderAddress, setOrderAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [totalAmount, settotalAmount] = useState('')
  const [shipping, setShipping] = useState(34)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [isPermissionModal, setIsPermissionModal] = useState(false)
  const [modalLoader, setModalLoader] = useState(false)
  const [orderId , setOrderId] = useState('')


  useEffect(() => {
    const date = getOrderDate(orderData?.createdAt)
    setDate(date)
    setOrderStatus(orderData?.status)
    setOrderAddress(orderData.shippingAddress)
    setPaymentMethod(orderData.paymentMethod)
    const totalAmount = calculateTotalAmount(orderData)
    settotalAmount(totalAmount)
    setOrderId(orderData?._id?.toString()?.slice(0, 6))
  }, [orderData])

  const getOrderDate = (givenDate) => {
    const timestamp = givenDate;
    const dateObject = new Date(timestamp);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate
  }


  const calculateTotalAmount = (order) => {
    // Use reduce to iterate through the products in the order and accumulate the total amount
    const totalAmount = order.products.reduce((accumulator, productItem) => {
      // Ensure productItem.product and productItem.qty exist
      if (productItem.product && productItem.qty) {
        // Multiply the product price by the quantity and add to the accumulator
        return accumulator + productItem.product.price * productItem.qty;
      } else {
        // If any necessary information is missing, return the accumulator unchanged
        return accumulator;
      }
    }, 0); // Initialize accumulator to 0

    return totalAmount;
  };

  const handleCancelOrder = async () => {
    try {
      const _id = orderData._id
      setLoader(true)
      setModalLoader(true)
      const response = await cancelOrder(authToken, _id)
      if (response.success) {
        console.log(response);
        dispatch(deleteOrderRedux({ _id }))
        navigation.navigate('MyOrders')
        setLoader(false)
        setModalLoader(false)
        setIsPermissionModal(false)
      } else {
        console.log(response.message);
        setError(response.message)
        setLoader(false)
        setModalLoader(false)
        setIsPermissionModal(false)
      }
    } catch (error) {
      console.log(error);
      setError(error.message)
      setLoader(false)
      setModalLoader(false)
      setIsPermissionModal(false)
    }
  }

  const handleCloseModal = () => {
    if (!modalLoader) {
      setIsPermissionModal(false)
    }
  }


  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>
          <Header title={'Order details'} backImage={images.backIcon} />
          <View style={styles.mainContainer}>
            <View style={styles.firstViewRow3}>
              <Text style={styles.firstViewText}>{date}</Text>
              {/* <TouchableOpacity> */}
                <Text style={styles.firstViewText1}>{orderStatus}</Text>
              {/* </TouchableOpacity> */}
            </View>
            <Text style={styles.firstViewText2}>
                {`# ${orderId}`}
              {/* #59890045678 */}
              </Text>
            <Text style={styles.firstViewText}>{date}</Text>
            <Text style={styles.firstViewText2}>
              {`${orderAddress?.city}, ${orderAddress?.zipCode}, ${orderAddress?.state}, ${orderAddress?.country}`}
            </Text>
            <Text style={styles.firstViewText}>Payment Method</Text>
            <View style={styles.firstViewRow2}>
              <Text style={styles.firstViewText3}>{paymentMethod}</Text>
              <Image source={images.cardIcon} style={styles.imageSize} />
            </View>
            <View style={styles.horizontalLine}></View>
            {
              orderData?.products.map((item, index) => {
                return (
                  <View style={styles.firstViewRow} key={index}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.secondViewText}>{item?.product?.name}</Text>
                      <Text>
                        <Text style={styles.firstViewText1}>{`$${item?.product?.price}.00`}</Text>
                      </Text>
                    </View>
                    <Text style={styles.firstViewText}>
                      {`Quantity: ${item.qty}`}
                    </Text>
                  </View>
                )
              })
            }

            <View style={styles.horizontalLine}></View>
            <View style={styles.firstViewRow}>
              <Text style={styles.firstViewText}>Item Total</Text>
              {/* <TouchableOpacity> */}
                <Text style={styles.firstViewText1}>{`$${totalAmount}.00`}</Text>
              {/* </TouchableOpacity> */}
            </View>
            <View style={styles.firstViewRow}>
              <Text style={styles.firstViewText}>Shipping</Text>
              {/* <TouchableOpacity> */}
                <Text style={styles.firstViewText1}>{`$${shipping}.00`}</Text>
              {/* </TouchableOpacity> */}
            </View>
            <View style={styles.firstViewRow}>
              <Text style={styles.secondViewText}>Paid</Text>
              <TouchableOpacity>
                <Text style={styles.bold}>{`$${(totalAmount + shipping)}.00`}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        {
          orderStatus === 'Processing' &&
            loader ?
            <View style={styles.loaderContainer}>
              <Loader />
            </View>
            :
            <TouchableOpacity style={styles.bottomBtn}
              onPress={() => setIsPermissionModal(true)}
            >
              <Text style={styles.bottomBtnText}>Cancel order</Text>
            </TouchableOpacity>
        }
        <Modal isVisible={isPermissionModal} onBackdropPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <Image source={images.noOrders} style={styles.deleteCartImg} />
            <Text style={styles.modalText}>Are you sure you want to delete this order?</Text>
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
                    onPress={() => handleCancelOrder()}
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
