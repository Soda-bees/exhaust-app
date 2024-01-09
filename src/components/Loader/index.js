import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './style'

export default function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={'white'} size={32}/>
    </View>
  )
}