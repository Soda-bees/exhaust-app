import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import images from '../../services/utilities/images'
import { styles } from './style'

export default function Intro({ navigation }) {    

    return (
        <SafeAreaView>
            <ImageBackground source={images.introBg} style={styles.bgImg}
            >
                <Image source={images.introLogo} style={styles.logo} />
                <Text style={styles.text1}>
                    Exhaust {'\n'}Power {'\n'}Unleashed {'\n'}Here
                </Text>
                <Text style={styles.text2}>
                    Welcome to CSZ EXHAUST! Ignite your drive with our premium car exhausts.
                    Experience power and style in perfect harmony. Precision-engineered for
                    enthusiasts like you, our systems redefine performance.
                </Text>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.replace('SignIn')
                    }
                >
                    <Text style={styles.btnText}>Get Started</Text>
                    <Image source={images.introBtnImg} style={styles.btnImg} />
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}