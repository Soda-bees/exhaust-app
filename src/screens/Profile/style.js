import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  mainContainer: {
    alignItems: 'center',
    height: sizes.screenHeight*0.86,
  },
  profileImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.23,
    height: sizes.screenWidth * 0.23,
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenHeight * 0.16,
    borderRadius: sizes.screenWidth * 0.02,
  },
  iconImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.04,
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
    width: sizes.screenWidth * 0.002,
    height: sizes.screenHeight * 0.02,
    backgroundColor: colors.black,
    marginLeft: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.01,
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
  textSty: {
    color: colors.black,
    fontSize: fontSize.small,
  },
  labelTextSty: {
    width: sizes.screenWidth * 0.11,
    color: colors.black,
    fontSize: fontSize.small,
    backgroundColor: colors.labelBdColor,
    position: 'absolute',
    top: sizes.screenHeight * 0.03,
    left: sizes.screenHeight * 0.055,
    zIndex: 10,
    textAlign: 'center',
  },
  bottomMainView: {
    paddingHorizontal: sizes.screenWidth * 0.04,
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.disabledBg2,
    backgroundColor: colors.white,
    paddingBottom:sizes.screenWidth * 0.04
  },
  bottomMainViewIOS: {
    paddingHorizontal: sizes.screenWidth * 0.04,
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.disabledBg2,
    backgroundColor: colors.white,
    paddingBottom:sizes.screenWidth * 0.04,
    width:sizes.screenWidth * 0.92,
    alignSelf:'center'
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.026
  },
  textStyling: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSize.small,
    marginLeft: sizes.screenWidth * 0.04
  },
  textStyling2: {
    color: colors.disabledBg3,
    fontWeight: 'bold',
    fontSize: fontSize.small,
    marginLeft: sizes.screenWidth * 0.04,
    position: 'absolute',
    right: sizes.screenWidth * 0.08
  },
  bottonIconImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.04,
    position: 'absolute',
    right: 0
  },
  bottomHeading: {
    color: colors.black,
    marginTop: sizes.screenHeight * 0.04,
    marginBottom: sizes.screenHeight * 0.02,
    fontWeight: 'bold',
    fontSize: fontSize.large
  },

  btnIconImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.04,
    marginLeft: sizes.screenWidth * 0.04,
  },

  btnIconView: {
    position: 'absolute',
    right: 0,
  },
  
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.45,
    marginBottom: sizes.screenHeight*0.02
  },
  bottomBtnIOS: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.42,
    marginBottom: sizes.screenHeight * 0.08,
    alignSelf:'center'
  },
  forwardIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.025,
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.02
  },
  inputField: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.08,
    borderColor: colors.borderGrey,
    paddingLeft: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.02
  },
  inputFieldIOS: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.08,
    borderColor: colors.borderGrey,
    paddingLeft: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.02,
    height:sizes.screenHeight * 0.06,
    alignSelf:'center'
  },
  icon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.05,
  },
  inputText: {
    color: colors.textGreyDark,
    width: sizes.screenWidth * 0.58,
  },
  placeholder: {
    position: 'absolute',
    left: sizes.screenWidth * 0.12,
    bottom: sizes.screenWidth * 0.12,
    backgroundColor: '#F3F5F8',
    color: colors.black,
    paddingHorizontal: sizes.screenHeight * 0.01,
    fontSize: fontSize.small
  },
  placeholderIOS: {
    position: 'absolute',
    left: sizes.screenWidth * 0.12,
    bottom: sizes.screenWidth * 0.11,
    backgroundColor: '#F3F5F8',
    color: colors.black,
    paddingHorizontal: sizes.screenHeight * 0.01,
    fontSize: fontSize.small
  },
  placeholderPhone: {
    position: 'absolute',
    left: sizes.screenWidth * 0.12,
    bottom: sizes.screenWidth * 0.1,
    backgroundColor: '#F3F5F8',
    color: colors.black,
    paddingHorizontal: sizes.screenHeight * 0.01,
    fontSize: fontSize.small
  },
  placeholderPhoneIOS: {
    position: 'absolute',
    left: sizes.screenWidth * 0.12,
    bottom: sizes.screenWidth * 0.115,
    backgroundColor: '#F3F5F8',
    color: colors.black,
    paddingHorizontal: sizes.screenHeight * 0.01,
    fontSize: fontSize.small
  },
  MainCartView2: {
    paddingHorizontal: sizes.screenWidth * 0.06,
    paddingVertical: sizes.screenHeight * 0.005,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.2,
    borderColor: colors.borderGrey,
    borderWidth: 1,
  },
  MainCartView2IOS: {
    paddingHorizontal: sizes.screenWidth * 0.06,
    paddingVertical: sizes.screenHeight * 0.005,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.2,
    borderColor: colors.borderGrey,
    borderWidth: 1,
    width:sizes.screenHeight * 0.416,
    alignSelf:'center'
  },
  inputFieldBackground: {
    borderTopRightRadius: sizes.screenWidth * 0.08,
    borderBottomRightRadius: sizes.screenWidth * 0.08,
    backgroundColor: 'transparent',
    height: sizes.screenHeight * 0.06,
    bottom: sizes.screenHeight * 0.007
  },
  labelName: {
    fontSize: fontSize.small,
    paddingTop: sizes.screenHeight * 0.01,
    paddingLeft: sizes.screenWidth * 0.01,
    color: colors.disabledBg3,
  },
});
