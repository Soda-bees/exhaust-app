import {StyleSheet} from 'react-native';
import {colors} from '../../services/utilities/colors';
import {fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    alignItems: 'center',
    // justifyContent: 'center',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    // paddingLeft: sizes.screenWidth * 0.05,
    // paddingRight: sizes.screenWidth * 0.05,
  },

  header: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
  },

  heading: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '800',
    marginLeft: sizes.screenWidth * 0.25,
  },

  headerBackIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.07,
    width: sizes.screenWidth * 0.07,
  },

  headerIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.1,
    width: sizes.screenWidth * 0.1,
  },

  scrollBody: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.54,
  },

  itemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.02,
    padding: sizes.screenHeight * 0.012,
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },

  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ferrariF12ExhaustContainer: {
    backgroundColor: colors.borderColor,
    borderRadius: sizes.screenHeight * 0.02,
    marginRight: sizes.screenHeight * 0.012,
  },

  ferrariF12Exhaust: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.24,
    height: sizes.screenWidth * 0.24,
  },

  exhaustType: {
    fontSize: fontSize.small,
    color: colors.textGrey,
  },

  exhaustPrice: {
    fontWeight: '600',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
  },

  deleteAndQuantityContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  deleteIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.022,
    width: sizes.screenHeight * 0.022,
    marginTop: sizes.screenHeight * 0.01,
    marginRight: sizes.screenHeight * 0.01,
  },

  quantityContainer: {
    height: sizes.screenHeight * 0.04,
    backgroundColor: colors.borderColor,
    width: sizes.screenWidth * 0.2,
    justifyContent: 'space-between',
    paddingLeft: sizes.screenWidth * 0.03,
    paddingRight: sizes.screenWidth * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.screenHeight * 0.05,
  },

  textQuantityMinus: {
    color: colors.black,
    fontSize: fontSize.large,
    bottom: sizes.screenHeight * 0.008,
  },

  textQuantity: {
    color: colors.black,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.06,
    textAlign: 'center',
  },

  textQuantityPlus: {
    color: colors.black,
    fontSize: fontSize.large,
  },
  //////////////////////////////////////

  brandContainer: {
    backgroundColor: '#F4F4F6',
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 3,
  },

  test: {
    width: sizes.screenWidth * 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: sizes.screenHeight * 0.12,
    justifyContent: 'center',
  },

  brandIconContainer: {
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },

  brandIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.09,
  },

  separator: {
    width: sizes.screenWidth * 0.003,
    height: sizes.screenHeight * 0.05,
    backgroundColor: colors.lightGray2,
    marginLeft: sizes.screenWidth * 0.01,
    marginRight: sizes.screenWidth * 0.04,
  },

  brandName: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '600',
  },

  quantity: {
    fontSize: fontSize.smallM,
    color: colors.btnBlue,
  },

  merginView: {
    height: sizes.screenHeight * 0.06,
  },
  promoSty: {
    // borderWidth:1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginHorizontal: sizes.screenWidth * 0.06,
    alignItems: 'center',
    color: colors.black,
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.02,
    marginTop: sizes.screenWidth * 0.1,
    marginBottom: sizes.screenWidth * 0.07,
  },
  promoSty2: {
    // borderWidth:1,
    backgroundColor: colors.btnBlue,
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.04,
    borderRadius: sizes.screenWidth * 0.02,
    // marginHorizontal:sizes.screenWidth * 0.06
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
    fontWeight:'bold'
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
    borderRadius:sizes.screenWidth * 0.1,    
    height: sizes.screenHeight * 0.06,
    backgroundColor:colors.btnBlue,
    width: sizes.screenHeight * 0.46,
  },
  forwardIcon: {
    resizeMode: 'contain',
    // backgroundColor: 'red',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
    // marginTop: sizes.screenHeight * 0.01,
    // marginRight: sizes.screenHeight * 0.01,
  },
  bottomBtnText:{
    color:colors.white,
    fontSize:fontSize.medium,
    fontWeight:'500',
    marginLeft:sizes.screenWidth * 0.02
  },
});
