import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import images from '../../services/utilities/images'
import { useDispatch } from 'react-redux'
import { setAuthToken } from '../../store/authToken'

export default function Congratulations({ navigation, route }) {
    const dispatch = useDispatch()
    const { token } = route.params

    const handleConfirm = async () => {
        console.log("hello");
        dispatch(setAuthToken(token))
    }
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Image source={images.congratulation} style={styles.img} />
                    <Text style={styles.text1}>Congratulations!</Text>
                    <Text style={styles.text2}>Your profile creation is now{'\n'}complete</Text>
                </View>

                <TouchableOpacity style={styles.bottomBtn2} onPress={handleConfirm}>
                    <Text style={styles.bottomBtnText2}>Let's get started!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}