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
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
})