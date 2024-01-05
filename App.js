import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Brands from './src/screens/Brands';
import MyCart from './src/screens/MyCart';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword/index';
import Home from './src/screens/Home';
import PopularExhaust from './src/screens/PopularExhaust';
import MainNavigator from './src/services/config/navigation';
import EmailOTP from './src/screens/EmailOTP';
import Header from './src/components/Header';
import images from './src/services/utilities/images';

export default function App() {

  const handleSomething =()=>{

  }
  return (
    <MainNavigator />
  )
}
