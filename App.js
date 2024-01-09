import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import MainNavigator from './src/services/config/navigation';
import { checkServerConnection } from './src/services/config/API';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {


  useEffect(() => {
    LogBox.ignoreAllLogs();
    handleCheckServerConnection()
  }, [])


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
