import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import ResetPassword from '../../screens/ResetPassword';
import EmailOTP from '../../screens/EmailOTP';
import Home from '../../screens/Home';
import Brands from '../../screens/Brands';
import PopularrExhaust from '../../screens/PopularExhaust';
import MyCart from '../../screens/MyCart';
import Checkout from '../../screens/Checkout';
import PaymentMethod from '../../screens/PaymentMethod';
import ShippingAddresses from '../../screens/ShippingAddresses';
import AddShippingAddress from '../../screens/AddShippingAddress';
import OrderConfirm from '../../screens/OrderConfirm';
import OrderDetails from '../../screens/OrderDetails';
import ExhaustItem from '../../screens/ExhaustItem';
import Notification from '../../screens/Notification';
import Profile from '../../screens/Profile';
import EditProfile from '../../screens/EditProfile';
import TabNavigation from './TabNavigation';
import ForgotPassword from '../../screens/ForgotPassword';
import UploadPhoto from '../../screens/UploadPhoto';
import UploadProfilePhoto from '../../screens/UploadProfilePhoto';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../store/authToken';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const authToken = useSelector(selectAuthToken)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          authToken ?
            <Stack.Screen name="MyAppStack" component={MyAppStack} />
            :
            <Stack.Screen name="MyAuthStack" component={MyAuthStack} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )

}
const MyAppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="EmailOTP" component={EmailOTP} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Brands" component={Brands} />
      <Stack.Screen name="PopularExhaust" component={PopularrExhaust} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="ShippingAddresses" component={ShippingAddresses} />
      <Stack.Screen name="AddShippingAddress" component={AddShippingAddress} />
      <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="ExhaustItem" component={ExhaustItem} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="UploadProfilePhoto" component={UploadProfilePhoto} />
    </Stack.Navigator>
  );
};
const MyAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="EmailOTP" component={EmailOTP} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Brands" component={Brands} />
      <Stack.Screen name="PopularExhaust" component={PopularrExhaust} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="ShippingAddresses" component={ShippingAddresses} />
      <Stack.Screen name="AddShippingAddress" component={AddShippingAddress} />
      <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="ExhaustItem" component={ExhaustItem} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="UploadProfilePhoto" component={UploadProfilePhoto} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return <TabNavigation />;
};