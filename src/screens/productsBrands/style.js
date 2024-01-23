import { StyleSheet } from 'react-native';
import { colors } from '../../services/utilities/colors';
import { fontSize, sizes } from '../../services';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E8EA',
    alignItems: 'center',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  innerContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: 'transparent'
  },
  header: {
    width: sizes.screenWidth * 0.94,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
    alignSelf: 'center',
    // backgroundColor:'red'
  },

  headerBackIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.06,
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '800',
  },
  headerIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.1,
    width: sizes.screenWidth * 0.1,
    borderRadius: sizes.screenWidth * 0.05
  },
  headingContainer: {
    width: sizes.screenWidth * 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.01
  },
  logoIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
    borderRadius: sizes.screenWidth * 0.05
  },
  heading2: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '800',
  },
  scrollViewParent: {
    height: sizes.screenHeight * 0.88,
    alignItems: 'center'
  },
  productMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.03,
    width: sizes.screenWidth,
    paddingTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.03,
    paddingLeft: sizes.screenWidth * 0.075
  },
  lastLeftView: {
    borderRadius: sizes.screenWidth * 0.03,
    padding: sizes.screenWidth * 0.015,
    width: sizes.screenWidth * 0.41,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 8,
    backgroundColor: colors.white,
  },
  lastLeftViewImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.37,
    height: sizes.screenHeight * 0.13,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  lastLeftViewTextHeading: {
    fontSize: fontSize.extraLarge,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: sizes.screenWidth * 0.03,
    left: sizes.screenWidth * 0.01,
  },
  lastLeftViewTextPara: {
    fontSize: fontSize.small,
    color: colors.black,
    left: sizes.screenWidth * 0.01,
  },
  priceAndPlusSignView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: sizes.screenWidth * 0.01,
  },
  lastLeftViewTextHeading1: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: sizes.screenWidth * 0.02,
  },
  plusImgView: {
    left: sizes.screenWidth * 0.005,
    top: sizes.screenWidth * 0.016,
  },
  plusSignImg: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
  },
});
