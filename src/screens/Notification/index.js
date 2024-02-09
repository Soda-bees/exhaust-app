import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { styles } from './style';
import images from '../../services/utilities/images';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from '../../store/authToken';
import { getUserDetails } from '../../services/config/API';
import { selectUserData, updateNotificationRedux } from '../../store/userData';
import { colors } from '../../services';
import formatToJSON from '../../services/utilities/JsonLog';

export default function Notification({ navigation }) {

  const dispatch = useDispatch()

  const authToken = useSelector(selectAuthToken)
  const userData = useSelector(selectUserData)

  const [recentNotification, setRecentNotification] = useState([

  ]);
  const [exhautstNumberTwo, setExhautstNumberTwo] = useState([
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
  ]);

  const [loader, setLoader] = useState(false)

  const handleGetUserNotification = async () => {
    try {
      setLoader(true)
      const response = await getUserDetails(authToken)
      if (response.success) {
        setLoader(false)
        const allNotification = response.userData.notifications
        dispatch(updateNotificationRedux(allNotification))
      } else {
        setLoader(false)
        console.log(response.message);
      }
    } catch (error) {
      setLoader(false)
      console.log(error);
    }
  }

  const handleGetUserNotificationWithoutLoader = async () => {
    try {
      const response = await getUserDetails(authToken)
      if (response.success) {
        setLoader(false)
        const allNotification = response.userData.notifications
        dispatch(updateNotificationRedux(allNotification))
      } else {
        setLoader(false)
        console.log(response.message);
      }
    } catch (error) {
      setLoader(false)
      console.log(error);
    }
  }

  function timeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const seconds = Math.floor((now - time) / 1000);

    if (seconds < 60) {
      return 'Just now';
    } else if (seconds < 60 * 60) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    } else if (seconds < 60 * 60 * 24) {
      const hours = Math.floor(seconds / (60 * 60));
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(seconds / (60 * 60 * 24));
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }

  // useEffect(() => {
  //   handleGetUserNotificationWithoutLoader()
  // }, [])

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header
          title={'Notifications'}
          backImage={images.backIcon}
        />
        <View style={styles.mainContainer}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={loader}
                onRefresh={() => { handleGetUserNotification() }}
                colors={[colors.btnBlue]}
                progressBackgroundColor="white"
              />
            }
          >
            <Text style={styles.heading}>Recent</Text>
            {
              userData &&
              userData?.notifications.map((item, index) => {
                return (
                  <View key={index}>
                    <View style={styles.itemContainer}>
                      <TouchableOpacity style={styles.itemDetails}
                        onPress={() => navigation.navigate('OrderDetails', { orderData: item.order })}
                      >
                        <View style={styles.ferrariF12ExhaustContainer}>
                          <Image
                            style={styles.ferrariF12Exhaust}
                            source={{ uri: item?.order?.products[0]?.product?.images[0] }}
                          />
                        </View>
                        <View>
                          <Text style={styles.brandName}>
                            {/* {
                            item?.order?.products[0]?.product?.brand?.name
                          } */}
                            {item?.title}
                          </Text>
                          <Text style={styles.exhaustType}>
                            {/* {item?.order?.products[0]?.product?.name} */}
                            {item?.body}
                          </Text>
                          {/* <Text style={styles.exhaustPrice}>
                            {`$ ${item?.order?.products[0]?.product?.price}.00`}
                          </Text> */}
                        </View>
                      </TouchableOpacity>
                      <Text style={styles.timeSty}>{
                        timeAgo(item?.createdAt)
                      }</Text>
                    </View>
                  </View>
                );
              }).reverse()
            }
          </ScrollView>

        </View>
        {/* <View style={styles.mainContainer}>
            <Text style={styles.heading}>Yesterday</Text>
            {exhautstNumberTwo.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.itemDetails}>
                      <View style={styles.ferrariF12ExhaustContainer}>
                        <Image
                          style={styles.ferrariF12Exhaust}
                          source={item.logo}
                        />
                      </View>
                      <View>
                        <Text style={styles.brandName}>{item.name}</Text>
                        <Text style={styles.exhaustType}>
                          {item.description}
                        </Text>
                        <Text style={styles.exhaustPrice}>{item.price}</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.timeSty}>{item.time}</Text>
                  </View>
                </View>
              );
            })}
          </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
}
