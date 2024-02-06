import React, { useEffect } from 'react';
import { LogBox, PermissionsAndroid, Platform } from 'react-native';
import MainNavigator from './src/services/config/navigation';
import { checkServerConnection } from './src/services/config/API';
import { Provider, useDispatch } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import { socket, socketService } from './src/services/config/Socket';
import { notificationListners, requestUserPermission } from './src/services/config/NotificationService';

export default function App() {

  useEffect(() => {
    LogBox.ignoreAllLogs();
    handleCheckServerConnection();
    SplashScreen.hide();

  }, [])


  const handleCheckServerConnection = async () => {
    try {
      const response = await checkServerConnection()
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

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


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  )
}
