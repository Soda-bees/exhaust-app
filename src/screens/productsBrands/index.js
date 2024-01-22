import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import images from '../../services/utilities/images'
import { styles } from './style'
import formatToJSON from '../../services/utilities/JsonLog'
import Header from '../../components/Header'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../store/userData'

export default function ProductsBrand({ navigation, route }) {
    const { item } = route.params
    // console.log(formatToJSON(item));

    const userData = useSelector(selectUserData)

    return (
        <SafeAreaView>
            <ImageBackground style={styles.container} source={images.bg}>
                <View style={styles.innerContainer}>

                    <Header title={'hello'} backImage={images.backIcon} addToCartImage={userData.profile} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}