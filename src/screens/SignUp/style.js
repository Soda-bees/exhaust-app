import {StyleSheet} from 'react-native';
import {colors} from '../../services/utilities/colors';
import {fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E8EA',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  body: {
    width: sizes.screenWidth * 0.9,
  },

  signInSection: {
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.04,
  },

  heading: {
    fontSize: fontSize.h4,
    fontWeight: '600',
    color: colors.black,
    margin: sizes.screenHeight * 0.04,
  },

  icon2: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.05,
    marginRight:sizes.screenWidth * 0.05
    // backgroundColor:'red'
  },

  inputField: {
    width: sizes.screenWidth * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: sizes.screenHeight * 0.08,
    borderColor: colors.borderGrey,
    paddingLeft: sizes.screenWidth * 0.05,
    marginBottom: sizes.screenHeight * 0.024,
  },

  icon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.06,
  },

  inputText: {
    color: colors.textGreyDark,
    width: sizes.screenWidth * 0.58,
  },

  rememberMeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.7,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rememberMeText: {
    color: colors.disabledBg,
    fontSize: fontSize.small,
  },

  textUnderline: {
    textDecorationLine: 'underline',
    color: colors.textGreyDark,
    fontSize: fontSize.small,
    fontWeight: '800',
  },

  blueBtn: {
    backgroundColor: colors.btnBlue,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.screenHeight * 0.015,
  },

  blueBtnText: {
    color: colors.white,
    fontWeight: '600',
  },

  signUpText: {
    color: colors.textGreyDark,
    fontSize: fontSize.smallM,
  },

  blueText: {
    color: colors.btnBlue,
    fontSize: fontSize.smallM,
    fontWeight: '600',
  },

  socialMediaBtnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.03,
  },

  socialMediaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.42,
    justifyContent: 'center',
    borderRadius: sizes.screenHeight * 0.05,

    shadowColor: '#666666',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 3,
  },

  socialIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.05,
    marginRight: sizes.screenWidth * 0.015,
  },

  social2Icon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.05,
    width: sizes.screenWidth * 0.05,
    marginRight: sizes.screenWidth * 0.004,
  },

  socialText: {
    color: colors.black,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: sizes.screenHeight * 0.02,
  },
  logoRow:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:sizes.screenHeight * 0.03
  },
  logoSizing:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.15,
    height:sizes.screenHeight * 0.07,
    // backgroundColor:'red'
  },
  logoText:{
    fontSize:fontSize.h4,
    color: colors.black,
    fontWeight: '800',
    marginLeft:sizes.screenWidth * 0.01
  },
});
