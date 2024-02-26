import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from '../../services';

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
  },
  profileImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.23,
    height: sizes.screenWidth * 0.23,
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenHeight * 0.16,
    borderRadius: sizes.screenWidth * 0.03,
  },
  editImgView: {
    position: 'absolute',
    top: sizes.screenHeight * 0.125,
    right: sizes.screenWidth * 0.378,
  },
  editImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
  },
  iconImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.04,
    // backgroundColor:'red'
  },
  iconImgStyBottom: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.03,
  },
  fieldView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.disabledBg3,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenWidth * 0.1,
    marginTop: sizes.screenHeight * 0.04,
  },
  verticalLine: {
    width: sizes.screenWidth * 0.001,
    height: sizes.screenHeight * 0.02,
    backgroundColor: colors.black,
    marginLeft: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.03,
  },
  textSty: {
    color: colors.black,
    fontSize: fontSize.small,
    width: sizes.screenWidth * 0.65,
    // height:sizes.screenHeight * 0.03,
    // backgroundColor:'red'
  },
  labelTextSty: {
    // width: sizes.screenWidth * 0.12,
    color: colors.black,
    fontSize: fontSize.small,
    backgroundColor: colors.labelBdColor,
    position: 'absolute',
    top: sizes.screenHeight * 0.03,
    left: sizes.screenHeight * 0.055,
    zIndex: 10,
    textAlign: 'center',
    paddingHorizontal: sizes.screenWidth * 0.01
  },
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.044,
    paddingHorizontal: sizes.screenWidth * 0.03,
    // marginTop: sizes.screenHeight * 0.15,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.45,
    marginBottom: sizes.screenHeight * 0.02
  },
  bottomBtnIOS: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: sizes.screenWidth * 0.044,
    paddingHorizontal: sizes.screenWidth * 0.03,
    // marginTop: sizes.screenHeight * 0.15,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.42,
    marginBottom: sizes.screenHeight * 0.1,
    alignSelf:'center'
  },
  forwardIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.025,
    // backgroundColor:'red'
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.02
  },
  MainCartView2: {
    paddingHorizontal: sizes.screenWidth * 0.06,
    paddingVertical: sizes.screenHeight * 0.005,
    marginTop: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenWidth * 0.2,
    borderColor: colors.disabledBg3,
    borderWidth: 1,
  },
  placeholder: {
    position: 'absolute',
    left: sizes.screenWidth * 0.12,
    bottom: sizes.screenWidth * 0.101,
    backgroundColor: '#F3F5F8',
    color: colors.black,
    paddingHorizontal: sizes.screenHeight * 0.01,
    fontSize: fontSize.small
  },
  verticalLine2: {
    width: sizes.screenWidth * 0.002,
    height: sizes.screenHeight * 0.02,
    backgroundColor: colors.black,
    marginLeft: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.01,
    position: 'absolute',
    top: sizes.screenHeight * 0.02,
    left: sizes.screenWidth * 0.11
  },
  inputFieldBackground: {
    borderTopRightRadius: sizes.screenWidth * 0.08,
    borderBottomRightRadius: sizes.screenWidth * 0.08,
    backgroundColor: 'transparent',
    height: sizes.screenHeight * 0.06,
    bottom: sizes.screenHeight * 0.007
  },
  loaderContainer: {
    alignSelf: 'center'
  },
  loaderContainerIOS: {
    alignSelf: 'center',
    position:'absolute',
    bottom:sizes.screenHeight * 0.085
  },
  errorText: {
    color:colors.red,
    fontSize:fontSize.medium,
    marginTop:sizes.screenHeight * 0.01,
    alignSelf:'center',
    width:sizes.screenWidth * 0.89,
    fontWeight:'500'
  }
})