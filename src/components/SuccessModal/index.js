import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import  Modal  from 'react-native-modal'
import { styles } from './style'
import images from '../../services/utilities/images'
import { useNavigation } from '@react-navigation/native';

export default function SuccessModal({ isVisible , title , navigateTo}) {
    const navigation = useNavigation();
    return (
        <Modal
            isVisible={isVisible}
        >
            <View style={styles.modalContainer}>
                <Image  source={images.tickConfirm} style={styles.img}/>
                <Text style={styles.text}>{title}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(navigateTo)}>
                    <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
