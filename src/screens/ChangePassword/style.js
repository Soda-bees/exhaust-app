import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  topMainView: {
    // flex:1,
    // paddingHorizontal:sizes.screenWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.2,
  },
  forgotPassHeadingText: {
    fontWeight: '700',
    color: colors.black,
    fontSize: fontSize.h5,
    marginBottom: sizes.screenHeight * 0.02,
  },
  forgotPassParaText: {
    fontSize: fontSize.smallM,
    color: colors.textGrey,
  },
  textInputFieldStyling: {
    marginTop: sizes.screenHeight * 0.06,
  },

  textStylingStyling: {
    // borderWidth: 0.7,
    width: sizes.screenWidth * 0.7,
    // borderRadius: sizes.screenWidth * 0.3,
    // paddingLeft: sizes.screenWidth * 0.05,
    // borderColor: colors.black,
    // marginTop: sizes.screenHeight * 0.01,
    // marginBottom: sizes.screenHeight * 0.01,
    // color: colors.black,
    // backgroundColor:'red'
  },
  continueBtnStyling: {
    marginTop: sizes.screenHeight * 0.1,
    borderWidth: 1,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.3,
    paddingLeft: sizes.screenWidth * 0.05,
    borderColor: colors.borderGrey,
    height: sizes.screenWidth * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.btnBlue,
  },
  btnTextColor: {
    color: colors.white,
  },
  inputFieldRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth: 1,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.3,
    paddingLeft: sizes.screenWidth * 0.05,
    borderColor: colors.black,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    color: colors.black,
    // backgroundColor:'red'
  },
  inputFieldRowIOS:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth: 1,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.3,
    paddingLeft: sizes.screenWidth * 0.05,
    borderColor: colors.black,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    color: colors.black,
    height:sizes.screenHeight * 0.06
    // backgroundColor:'red'
  },
  icon2: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.05,
    marginRight:sizes.screenWidth * 0.05
    // backgroundColor:'red'
  },
  loaderContainer:{
    marginTop: sizes.screenHeight * 0.1,
  },
  errorText: {
    width: sizes.screenWidth * 0.85,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '500',
    color: colors.error
},
});
