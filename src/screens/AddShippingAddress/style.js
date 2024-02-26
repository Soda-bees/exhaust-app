import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    flexDirection: 'column',
    // alignItems:'center',
    justifyContent: 'space-between'
  },
  mainContainer: {
    paddingHorizontal: sizes.screenWidth * 0.05,
    // marginTop: sizes.screenHeight * 0.04,
    // backgroundColor:''
  },
  MainCartView: {
    paddingHorizontal: sizes.screenWidth * 0.06,
    // paddingVertical: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.02,
    // height: sizes.screenHeight * 0.09,
    borderRadius: sizes.screenWidth * 0.2,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    // backgroundColor:'blue'
  },
  MainCartView2: {
    paddingHorizontal: sizes.screenWidth * 0.06,
    paddingBottom: sizes.screenHeight * 0.01,
    // paddingVertical: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.02,
    // height: sizes.screenHeight * 0.09,
    borderRadius: sizes.screenWidth * 0.2,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    // backgroundColor:'blue'
  },
  labelName: {
    fontSize: fontSize.small,
    paddingTop: sizes.screenHeight * 0.01,
    paddingLeft: sizes.screenWidth * 0.01,
    // backgroundColor:'yellow',
    color: colors.disabledBg3,
    // position:'absolute',
    // left:sizes.screenWidth * 0.06,
    // top:sizes.screenHeight * 0.008,

  },
  pickerText: {
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    fontSize: fontSize.medium
  },
  inputField: {
    color: colors.black,
    width: sizes.screenWidth * 0.7,
    height: sizes.screenHeight * 0.05,

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red',
    height: sizes.screenHeight * 0.05,

  },
  arrowSizing: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.03
  },
  bottomBtn: {
    marginLeft: sizes.screenWidth * 0.01,
    // marginTop: sizes.screenHeight * 0.22,
    borderRadius: sizes.screenWidth * 0.07,
    height: sizes.screenHeight * 0.065,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.44,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.03
  },
  bottomBtnIOS: {
    // marginLeft: sizes.screenWidth * 0.01,
    borderRadius: sizes.screenWidth * 0.07,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.42,
    backgroundColor: colors.btnBlue,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.095,
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  inputFieldBackground: {
    borderTopRightRadius: sizes.screenWidth * 0.08,
    borderBottomRightRadius: sizes.screenWidth * 0.08,
    backgroundColor: 'transparent',
    height: sizes.screenHeight * 0.06,
    bottom: sizes.screenHeight * 0.007
  },
  loaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: sizes.screenHeight * 0.085,
  },
  loaderViewIOS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.screenHeight * 0.08,
    alignSelf:'center'
  },
  errorTest:{
   width: sizes.screenWidth * 0.75,
   marginBottom: sizes.screenHeight * 0.01,
   fontWeight: '500',
   color: colors.error
  },
 

})