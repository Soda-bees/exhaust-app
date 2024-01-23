import {StyleSheet} from 'react-native';
import {colors} from '../../services/utilities/colors';
import {fontSize, sizes} from '../../services';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E8EA',
    alignItems: 'center',
    // justifyContent: 'center',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    // paddingLeft: sizes.screenWidth * 0.05,
    // paddingRight: sizes.screenWidth * 0.05,
  },

  header: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
  },

  heading: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '800',
    paddingRight:sizes.screenWidth * 0.05,
    marginLeft:'auto',
    marginRight:'auto'
  },

  headerBackIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },

  headerIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.05,
  },

  brandContainer: {
    backgroundColor: '#F4F4F6',
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.1,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 3,
  },

  test: {
    width: sizes.screenWidth * 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: sizes.screenHeight * 0.12,
    justifyContent: 'center',
  },

  brandIconContainer: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },

  brandIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.09,
  },

  separator: {
    width: sizes.screenWidth * 0.003,
    height: sizes.screenHeight * 0.05,
    backgroundColor: colors.lightGray2,
    marginLeft: sizes.screenWidth * 0.01,
    marginRight: sizes.screenWidth * 0.04,
  },

  brandName: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '600',

  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 18,
    bottom: 12,
  },

  quantity: {
    fontSize: fontSize.smallM,
    color: colors.btnBlue,
  },

  merginView: {
    height: sizes.screenHeight * 0.06,
  },
});
