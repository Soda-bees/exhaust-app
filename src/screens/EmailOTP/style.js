import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  topMainView: {
    // flex:1,
    // paddingHorizontal:sizes.screenWidth * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.12,
    // backgroundColor:'red',
    // height:sizes.screenHeight * 0.6
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
  resendViewPositioning: {
    flexDirection: 'row',
    // marginTop: sizes.screenHeight * 0.2,
  },
  emailLabelStyling1: {
    color: colors.textGrey,
    fontSize: fontSize.smallM,
  },
  emailLabelStyling2: {
    color: colors.textGreyDark,
    fontWeight: '700',
    fontSize: fontSize.smallM,
  },
  continueBtnStyling: {
    marginTop: sizes.screenHeight * 0.05,
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
  codeFieldRoot: {
    // marginTop: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.65,
    padding: sizes.screenWidth * 0.05,
    alignSelf: 'center',
  },
  cell: {
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight*0.06,
    lineHeight: sizes.screenHeight*0.06,
    fontSize: fontSize.h5,
    fontWeight:'500',
    borderWidth: 1,
    borderColor: colors.disabledBg2,
    textAlign: 'center',
    color: colors.black,
    borderRadius:sizes.screenWidth*0.02
  },
  focusCell: {
    borderColor: '#000',
  },
  padding:{
    marginTop:sizes.screenHeight * 0.1
  }
  });
