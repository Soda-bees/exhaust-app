import React from "react";
import messaging from "@react-native-firebase/messaging"


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

    const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log("A new FCM message arrived!");
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage,
        );
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    formatToJSON(remoteMessage, remoteMessage)
                );
            }
        });


    return unsubscribe;
}


// AAAAdTr1xJ0:APA91bGKOzOze7ucSm6oxWyZsxdxOTp6A3Hukxi04MiDFCatWC3GhQyaPGsWvPrjKyp-01KT7VSrc_O8bz1nppuVENdq1wtedabboSPQld83DtgXX1jIHNYj8Z9U_FjX1rCqGopIS7tK