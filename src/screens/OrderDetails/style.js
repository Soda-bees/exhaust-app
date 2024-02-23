import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  mainContainer: {
    paddingHorizontal: sizes.screenWidth * 0.05,
    // backgroundColor:'red'
  },
  firstViewRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },
  firstViewRow3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },
  firstViewRow2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  firstViewText: {
    color: colors.disabledBg3
  },
  firstViewText1: {
    color: colors.btnColor,
  },
  firstViewText2: {
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: sizes.screenHeight * 0.02,
  },
  firstViewText3: {
    color: colors.black,
    fontWeight: 'bold',
  },
  imageSize: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.02,
    marginLeft: sizes.screenWidth * 0.01,
  },
  horizontalLine: {
    width: sizes.screenWidth * 0.96,
    height: sizes.screenWidth * 0.001,
    backgroundColor: colors.gray,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
  },
  secondViewText: {
    color: colors.black,
    fontWeight: 'bold'
  },
  bold: {
    color: colors.btnColor,
    fontWeight: 'bold'
  },
  bottomBtn: {
    marginLeft: sizes.screenWidth * 0.01,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.07,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.44,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02
  },
  bottomBtnIOS: {
    // marginLeft: sizes.screenWidth * 0.01,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.07,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.42,
    justifyContent: 'center',
    alignSelf: 'center',
    position:'absolute',
    bottom:sizes.screenHeight * 0.1
    // marginBottom: sizes.screenHeight * 0.02
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  loaderContainer: {
    alignSelf: 'center'
  },
  errorText:{
    width: sizes.screenWidth * 0.75,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '500',
    color: colors.error,
    marginTop:sizes.screenHeight * 0.02,
    width:sizes.screenWidth * 0.9,
    alignSelf:'center'
  },
  modalContainer: {
    width: sizes.screenWidth * 0.83,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    paddingVertical: sizes.screenHeight * 0.03
  },
  deleteCartImg: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenWidth * 0.2,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  modalText: {
    color: colors.black,
    textAlign: 'center',
    width: sizes.screenWidth * 0.5,
    alignSelf: 'center',
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.01
  },
  modalBtnContainer: {
    width: sizes.screenWidth * 0.64,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: sizes.screenHeight * 0.02
  },
  noBtn: {
    width: sizes.screenWidth * 0.31,
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.01
  },
  yesBtn: {
    width: sizes.screenWidth * 0.31,
    backgroundColor: colors.btnBlue,
    height: sizes.screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.01
  },
  modlBtnText: {
    color: colors.white,
    fontSize: fontSize.smallM,
    fontWeight: '500'
  },
  modlBtnText2: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500'
  },
})