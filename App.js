import React, { useEffect } from 'react';
import { LogBox, PermissionsAndroid, Platform } from 'react-native';
import MainNavigator from './src/services/config/navigation';
import { checkServerConnection } from './src/services/config/API';
import { Provider, useDispatch } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { socket, socketService } from './src/services/config/Socket';
import messaging from '@react-native-firebase/messaging';
import NavigationService from './src/services/config/NavigationService';
import { notificationListners, requestUserPermission } from './src/services/config/NotificationService';

export default function App() {


  useEffect(() => {
    LogBox.ignoreAllLogs();
    handleCheckServerConnection();
    SplashScreen.hide();

  }, [])

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then((res) => {
        console.log('res===>', res);
        if (!!res && res === 'granted') {
          requestUserPermission()
          notificationListners()
        }
        notificationListners()
      }).catch((error) => {
        console.log('error in get permission in app.js')
      })
    } else {

    }
  }, [])

  // useEffect(() => {
  //   // Request permission for notifications
  //   requestUserPermission();

  //   // Register background handler
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Received FCM Background Message', remoteMessage);
  //   });

  //   // Listen for FCM messages when the app is in the foreground
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('Received FCM Message', remoteMessage);
  //   });

  //   // Listen for FCM messages when the app is in the background or closed
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage,
  //     );
  //     NavigationService.navigate('Notification')
  //     // You can navigate to a specific screen here
  //   });

  //   // Check if the app was opened by a notification
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage,
  //         );
  //         // You can navigate to a specific screen here
  //         setTimeout(() => {

  //           NavigationService.navigate('Notification')
  //         }, 2000)
  //       }
  //     });

  //   return unsubscribe;
  // }, []);

  // const requestUserPermission = async () => {
  //   try {
  //     if (Platform.OS === 'ios') {
  //       await messaging().requestPermission();
  //     } else {
  //       const granted = await messaging().requestPermission();
  //       if (granted === messaging.AuthorizationStatus.AUTHORIZED) {
  //         console.log('Permission granted');
  //       } else {
  //         console.log('Permission denied');
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Permission denied', error);
  //   }
  // };

  const handleCheckServerConnection = async () => {
    try {
      const response = await checkServerConnection()
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  )
}
