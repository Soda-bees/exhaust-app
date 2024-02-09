/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';


TrackPlayer.setupPlayer().then(() => {
  // Additional setup code or player configuration can go here
});


AppRegistry.registerComponent(appName, () => App);
