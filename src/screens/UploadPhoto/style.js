import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: sizes.screenHeight,
    width: sizes.screenWidth,
  },
  TopView: {
    textAlign: 'center',
    alignItems: 'center',
    height: sizes.screenHeight * 0.8,
    justifyContent: 'center',
  },
  profileImgSiz: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.30,
    height: sizes.screenWidth * 0.30,
    borderRadius: sizes.screenWidth * 0.15
  },
  profileHeading: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '600',
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },
  profilePara: {
    color: colors.disabledBg3,
  },
  bottomBtn: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    // marginTop: sizes.screenHeight * 0.25,
  },
  bottomBtn2: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: colors.btnBlue,
    marginTop: sizes.screenHeight * 0.02,
  },
  bottomBtnText: {
    textAlign: 'center',
    color: colors.black,
    fontWeight: '500',
  },
  bottomBtnText2: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: '500',
  },
  loaderContainer: {
    marginTop: sizes.screenHeight * 0.02
  },
  error:{
    width: sizes.screenWidth * 0.75,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '500',
    color: colors.error
  }
});
