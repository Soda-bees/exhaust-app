import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    justifyContent: 'space-between'
  },
  mainContainer: {
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
    // marginRight:sizes.screenWidth * 0.04
  },


  shippingAddressContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.88,
    alignSelf: 'center',
    height: sizes.screenHeight * 0.2,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },



  MainCartView: {
    // borderWidth:1,
    width: sizes.screenWidth * 0.9,
    padding: sizes.screenWidth * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.02,
    // height: sizes.screenHeight * 0.18,
    borderRadius: sizes.screenWidth * 0.03,
    backgroundColor: colors.white,
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.01,
  },
  checkBox: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.05,
  },
  loaderView: {
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingSty2: {
    color: colors.black,
    marginLeft: sizes.screenHeight * 0.01
  },
  scrollViewParent: {
    height: sizes.screenHeight * 0.8,
    width: sizes.screenWidth,
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
    alignSelf: 'flex-end',
    marginRight: sizes.screenWidth * 0.06,
    marginBottom: sizes.screenHeight * 0.025
  },
  iconsView: {
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.022,
    width: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.01,
    marginRight: sizes.screenWidth * 0.02
  },
  icon2: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.022,
    width: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.01,
  },
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.065,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.46,
    marginBottom: sizes.screenHeight * 0.02
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.02,
  },
  forwardIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
  },
});
