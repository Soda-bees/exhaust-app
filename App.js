import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import MainNavigator from './src/services/config/navigation';
import apiInstance from './src/services/utilities/ApiInstance';
import { checkServerConnection, checkServerConnection2 } from './src/services/config/API';
import axios from 'axios';

export default function App() {


  useEffect(() => {
    LogBox.ignoreAllLogs();
    handleCheckServerConnection()
  }, [])


  const handleCheckServerConnection = async () => {
    try {
      const response = await apiInstance.get('http://192.168.100.59:5000/getAllProduct')
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <MainNavigator />
  )
}
