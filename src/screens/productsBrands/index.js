import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import images from '../../services/utilities/images'
import { styles } from './style'
import formatToJSON from '../../services/utilities/JsonLog'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../store/userData'
import { selectProducts } from '../../store/products'
import { colors, sizes } from '../../services'

export default function ProductsBrand({ navigation, route }) {
    const { item } = route.params

    const products = useSelector(selectProducts)
    const userData = useSelector(selectUserData)

    const [selectedProducts, setSelectedProducts] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const filteredProducts = filterProduct()
        setSelectedProducts(filteredProducts)
    }, [item])

    const filterProduct = () => {
        const data = products.filter(product => product.brand.name === item?.name)
        return data
    }

    const handleGetAllProducts = () => {

    }

    return (
        <SafeAreaView>
            <ImageBackground style={styles.container} source={images.bg}>
                <View style={styles.innerContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={styles.headerBackIcon} source={images.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.heading}>Brands</Text>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Profile')}
                        >
                        <Image style={styles.headerIcon} source={{ uri: userData?.profile }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading2}>{item?.name}</Text>
                        <Image style={styles.logoIcon} source={{ uri: item?.logo }} />
                    </View>
                    <View style={styles.scrollViewParent}>
                        <ScrollView showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={loader}
                                    onRefresh={() => { handleGetAllProducts() }}
                                    colors={[colors.btnBlue]}
                                    progressBackgroundColor="white"
                                />
                            }
                        >
                            <View style={styles.productMainView}>
                                {selectedProducts &&
                                    selectedProducts
                                        .map((item, index) => {
                                            return (
                                                <View key={index}
                                                >
                                                    <View style={{
                                                        backgroundColor: colors.white, borderRadius: sizes.screenWidth * 0.03,
                                                    }}>

                                                        <TouchableOpacity
                                                            onPress={() =>
                                                              navigation.navigate('ExhaustItem', {
                                                                data: item,
                                                              })
                                                            }
                                                            style={styles.lastLeftView}>
                                                            <Image
                                                                source={{ uri: item?.images[0] }}
                                                                style={styles.lastLeftViewImg}
                                                            />
                                                            <View
                                                            >
                                                                <Text style={styles.lastLeftViewTextHeading}>
                                                                    {item.brand.name}
                                                                </Text>
                                                                <Text style={styles.lastLeftViewTextPara} numberOfLines={1}>
                                                                    {item.description}
                                                                </Text>
                                                                <View style={styles.priceAndPlusSignView}>
                                                                    <Text style={styles.lastLeftViewTextHeading1}>
                                                                        {`$${item.price}.00`}
                                                                    </Text>
                                                                    <View style={styles.plusImgView}>
                                                                        <TouchableOpacity
                                                                        // onPress={() =>
                                                                        //     navigation.navigate('MyCart', { data: item })
                                                                        // }
                                                                        >
                                                                            <Image
                                                                                source={images.plusSign}
                                                                                style={styles.plusSignImg}
                                                                            />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            );
                                        }).reverse()
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}