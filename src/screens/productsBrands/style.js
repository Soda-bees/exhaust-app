import {StyleSheet} from 'react-native';
import {colors} from '../../services/utilities/colors';
import {fontSize, sizes} from '../../services';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E8EA',
    alignItems: 'center',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  innerContainer:{
    width:sizes.screenWidth,
  }
});
