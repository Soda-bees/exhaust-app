import React from "react";
import messaging from "@react-native-firebase/messaging"
import NavigationService from "../NavigationService";
import PushNotification from 'react-native-push-notification';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}

export const getFcmToken = async () => {
  try {
    const token = await messaging().getToken()
    console.log('fcm token ==>', token);
    return token
  } catch (error) {
    console.log("error in generate token===>", error);

  }

}

export async function notificationListners() {

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Received FCM Background Message', remoteMessage);
  });

  // Listen for FCM messages when the app is in the foreground
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('Received FCM Message', remoteMessage);
  });

  // Listen for FCM messages when the app is in the background or closed
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage,
    );
    NavigationService.navigate('Notification')
    // You can navigate to a specific screen here
  });

  // Check if the app was opened by a notification
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage,
        );
        // You can navigate to a specific screen here
        setTimeout(() => {

          NavigationService.navigate('Notification')
        }, 1000)
      }
    });

  return unsubscribe;
}


const showPushNotification = (notificationData) => {
  console.log("push notification work");
  PushNotification.localNotification({
    channelId: 'channel-id-2', // Specify the channel ID
    title: 'title',
    message: 'body',
  });
};

// useEffect(() => {
//     if (Platform.OS === 'android') {
//       PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then((res) => {
//         console.log('res===>', res);
//         if (!!res && res === 'granted') {
//           requestUserPermission()
//            notificationListners()
//         }
//          notificationListners()
//       }).catch((error) => {
//         console.log('error in get permission in app.js')
//       })
//     } else {

//     }
//   }, [])





// AAAAdTr1xJ0:APA91bGKOzOze7ucSm6oxWyZsxdxOTp6A3Hukxi04MiDFCatWC3GhQyaPGsWvPrjKyp-01KT7VSrc_O8bz1nppuVENdq1wtedabboSPQld83DtgXX1jIHNYj8Z9U_FjX1rCqGopIS7tK