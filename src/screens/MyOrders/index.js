import { View, Text, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import images from '../../services/utilities/images'
import { styles } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData, updateOrdersRedux } from '../../store/userData'
import { colors, sizes } from '../../services'
import formatToJSON from '../../services/utilities/JsonLog'
import { selectAuthToken } from '../../store/authToken'
import { getUserDetails } from '../../services/config/API'
import socket from '../../services/config/Socket'

export default function MyOrders({ navigation }) {

    const dispatch = useDispatch()

    const userData = useSelector(selectUserData)
    const authToken = useSelector(selectAuthToken)
    const [loader, setLoader] = useState(false)

    function timeAgo(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const seconds = Math.floor((now - time) / 1000);

        if (seconds < 60) {
            return 'Just now';
        } else if (seconds < 60 * 60) {
            const minutes = Math.floor(seconds / 60);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else if (seconds < 60 * 60 * 24) {
            const hours = Math.floor(seconds / (60 * 60));
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            const days = Math.floor(seconds / (60 * 60 * 24));
            return `${days} day${days > 1 ? 's' : ''} ago`;
        }
    }

    // useEffect(() => {
    //     handleGetUserOrders()
    // }, [])

    useEffect(() => {
        const handleCustomEvent = data => {
            console.log("my order socket-=-=-=",data);
        };

        socket.on('statusUpdateClient', handleCustomEvent);

        return () => {
            socket.off('statusUpdateClient', handleCustomEvent);
        };
    }, [socket]);

    const handleGetUserOrders = async () => {
        try {
            setLoader(true)
            const response = await getUserDetails(authToken)
            if (response.success) {
                setLoader(false)
                const allorders = response.userData.orders
                dispatch(updateOrdersRedux(allorders))
            } else {
                setLoader(false)
                console.log(response.message);
            }
        } catch (error) {
            setLoader(false)
            console.log(error);
        }
    }

    return (
        <SafeAreaView>
            <ImageBackground style={styles.container} source={images.bg}>
                <Header title={'My Orders'} backImage={images.backIcon} />
                {
                    userData?.orders?.length > 0 ?
                        <View style={styles.scrollViewParent}>
                            <ScrollView showsVerticalScrollIndicator={false}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={loader}
                                        onRefresh={() => { handleGetUserOrders() }}
                                        colors={[colors.btnBlue]}
                                        progressBackgroundColor="white"
                                    />
                                }
                            >
                                <View style={styles.cartContainer}>
                                    {
                                        userData?.orders.map((item, index) => {
                                            return (
                                                <TouchableOpacity key={index} style={styles.cardItem}
                                                    onPress={() => navigation.navigate('OrderDetails', { orderData: item })}
                                                >
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <Image style={styles.itemImg} source={{ uri: item?.products[0]?.product?.images[0] }} />
                                                        <View>
                                                            <Text style={styles.itemTextBold}>{item?.products[0]?.product?.brand?.name}</Text>
                                                            <Text style={styles.itemTextLight}>{item?.products[0]?.product?.name}</Text>
                                                            <Text style={styles.itemTextBold}>{`$${item?.products[0]?.product?.price}.00`}</Text>
                                                        </View>
                                                    </View>
                                                    <Text style={styles.itemTextLightTime}>{timeAgo(item.createdAt)}</Text>
                                                </TouchableOpacity>
                                            )
                                        }).reverse()
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        :
                        <ScrollView showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={loader}
                                    onRefresh={() => { handleGetUserOrders() }}
                                    colors={[colors.btnBlue]}
                                    progressBackgroundColor="white"
                                />
                            }
                        >
                            <View style={styles.noOrdersContainer}>
                                <Image source={images.noOrders} style={styles.noOrdersImg} />
                                <Text style={styles.noOrdersText}>No orders found.</Text>
                            </View>
                        </ScrollView>
                }
            </ImageBackground>
        </SafeAreaView>
    )
}