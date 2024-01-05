import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sizes} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import images from '../utilities/images';
import {Image, Text, View} from 'react-native';
import {fontSize} from '../utilities/fonts';
import Home from '../../screens/Home';
import PopularrExhaust from '../../screens/PopularExhaust';
import Notification from '../../screens/Notification';
import Profile from '../../screens/Profile';
import MyCart from '../../screens/MyCart';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          width: sizes.screenWidth,
          height: sizes.screenHeight * 0.08,
          paddingTop: sizes.screenHeight * 0.01,
          paddingHorizontal: sizes.screenWidth * 0.04,
          // borderTopWidth: 0,
          borderTopRightRadius: sizes.screenWidth * 0.07,
          borderTopLeftRadius: sizes.screenWidth * 0.07,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.home : images.homeTwo}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.19,
                height:focused ? sizes.screenWidth * 0.08 :sizes.screenWidth * 0.05,
                marginTop:sizes.screenHeight * 0.02,
                // backgroundColor:colors.red
                // tintColor: focused ? colors.btnBlue : colors.gray,
              }}
            />
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Store"
        component={MyCart}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.cartBlue : images.cart}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.19,
                height:focused ? sizes.screenWidth * 0.08 :sizes.screenWidth * 0.05,
                marginTop:sizes.screenHeight * 0.02,
                // backgroundColor:colors.red
                // tintColor: focused ? colors.btnBlue : colors.gray,
              }}
            />
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
            source={focused ? images.notificationBlue : images.notificationTwo}
            style={{
              resizeMode: 'contain',
              width: sizes.screenWidth * 0.19,
              height:focused ? sizes.screenWidth * 0.08 :sizes.screenWidth * 0.05,
              marginTop:sizes.screenHeight * 0.02,
              // backgroundColor:colors.red
              // tintColor: focused ? colors.btnBlue : colors.gray,
            }}
          />
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.profileBlue : images.profile}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.19,
                height:focused ? sizes.screenWidth * 0.08 :sizes.screenWidth * 0.05,
                marginTop:sizes.screenHeight * 0.02,
                // backgroundColor:colors.red
                // tintColor: focused ? colors.btnBlue : colors.gray,
              }}
            />
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabLabel = ({focused, label}) => {
  const inactiveImg = images.homeTwo;
  const activeImg = images.home;

  return (
    <Text
      style={{
        // color: focused ? activeColor : inactiveColor,
        fontSize: fontSize.tiny,
        fontWeight: focused ? '800' : '400',
      }}>
      <Image
        // source={focused ? activeImg : inactiveImg}
        style={{
          resizeMode: 'contain',
          width: sizes.screenWidth * 0.065,
          height: sizes.screenWidth * 0.065,
          // tintColor: focused ? activeColor : inactiveColor,
        }}
      />
      {/* {label} */}
    </Text>
  );
};
