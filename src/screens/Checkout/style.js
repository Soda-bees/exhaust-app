import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';
import { screensEnabled } from 'react-native-screens';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  mainContainer: {
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  topTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.03,
    alignItems: 'center',
  },
  topTextSty1: {
    fontSize: fontSize.medium,
    color: colors.black,
  },
  topTextSty2: {
    fontSize: fontSize.small,
    color: colors.btnBlue,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    width: sizes.screenWidth * 0.34,
    height: sizes.screenHeight * 0.03,
    borderColor: colors.btnBlue,
    backgroundColor: colors.lightBlue,
  },
  MainCartView: {
    // borderWidth:1,
    padding: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    // height: sizes.screenHeight * 0.13,
    borderRadius: sizes.screenWidth * 0.03,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  firstCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.02,
    // backgroundColor:'red'
  },
  firstCartText: {
    color: colors.black,
  },
  firstCartText1: {
    color: colors.btnBlue,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  MainCartView2: {
    // borderWidth:1,
    padding: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    height: sizes.screenHeight * 0.09,
    borderRadius: sizes.screenWidth * 0.03,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.3,
  },
  cardIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.06,
    marginRight: sizes.screenWidth * 0.04
    // backgroundColor:'red'
  },
  pricesStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.07,
  },
  pricesStyling2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.07,
    marginTop: sizes.screenHeight * 0.01,
  },
  priceText1: {
    color: colors.disabledBg3,
  },
  priceNumber1: {
    color: colors.black,
    fontWeight: 'bold',
  },
  priceText2: {
    color: colors.disabledBg3,
    fontSize: fontSize.medium,
    fontWeight: 'bold'
  },
  priceNumber2: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSize.medium,
  },
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    // borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.46,
  },
  bottomBtnDisable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.gray,
    width: sizes.screenHeight * 0.46,
  },
  modalBottomBtn: {
    textAlignVertical: 'center',
    textAlign: 'center',
    marginLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.46,
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.015
  },
  forwardIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.02,
  },
  modalBody: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },

  modalMainView: {
    backgroundColor: 'blue',
    alignSelf: 'center',
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.7,
    borderTopLeftRadius: sizes.screenHeight * 0.04,
    borderTopRightRadius: sizes.screenHeight * 0.04,
    backgroundColor: colors.bglightblue,
  },
  horizontalLine: {
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.007,
    backgroundColor: colors.disabledBg2,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: sizes.screenHeight * 0.015
  },
  modalHeading: {
    alignSelf: 'center',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.03,
    fontSize: fontSize.large,
  },
  modalInputField: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.1,
    marginTop: sizes.screenHeight * 0.03,
  },
  modalInputField2: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: sizes.screenHeight * 0.1,
    marginTop: sizes.screenHeight * 0.03,
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  textInputField: {
    color: colors.black,
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.75,
    margin: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.06,
    // backgroundColor:'red',
  },
  textInputField2: {
    color: colors.black,
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.6,
    marginLeft: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.025,
    fontSize: fontSize.medium,
    // backgroundColor:'red'
  },
  inputFieldLabel: {
    color: colors.disabledBg3,
    marginLeft: sizes.screenWidth * 0.07,
    marginTop: sizes.screenWidth * 0.03,
    fontSize: fontSize.small,
    position: 'absolute',
    // backgroundColor:'blue'
  },
  imageSize: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.05,
    marginLeft: sizes.screenWidth * 0.11,
    alignSelf: 'center'
    // position:'absolute'
  },
  loaderContainer: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.05,
  },
  errorMessageText: {
    width: sizes.screenWidth * 0.75,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '500',
    color: colors.error,
    marginTop:sizes.screenHeight * 0.02,
    marginLeft:sizes.screenWidth * 0.06
  },
  errorText: {
    color: colors.red,
    // marginTop:sizes.screenHeight * 0.03
  }
});
