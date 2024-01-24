import { View, Text } from 'react-native'
import React from 'react'
import Modal from "react-native-modal"

export default function PermissionModal({ isPermissionModal, onPress }) {
    return (
        <Modal isVisible={isPermissionModal}>
            <Text onPress={() => {
                onPress()
            }}>modal</Text>
        </Modal>
    )
}