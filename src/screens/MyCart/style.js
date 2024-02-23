import { StyleSheet } from 'react-native';
import { colors } from '../../services/utilities/colors';
import { fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    alignItems: 'center',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  header: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
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
  quantityContainer2: {
    height: sizes.screenHeight * 0.04,
    backgroundColor: colors.borderColor,
    width: sizes.screenWidth * 0.2,
    justifyContent: 'space-between',
    paddingLeft: sizes.screenWidth * 0.03,
    paddingRight: sizes.screenWidth * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.screenHeight * 0.05,
    justifyContent: 'center'
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
  promoStyIOS: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginHorizontal: sizes.screenWidth * 0.06,
    alignItems: 'center',
    color: colors.black,
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.02,
    marginTop: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenWidth * 0.07,
    height:sizes.screenHeight * 0.06
  },

  inputFieldIOS:{
    color:colors.black,
    width:sizes.screenWidth * 0.3,
  },

  promoSty2: {
    backgroundColor: colors.btnBlue,
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.04,
    borderRadius: sizes.screenWidth * 0.02,
    fontWeight:'600',
  },
  promoSty2IOS: {
    backgroundColor: colors.btnBlue,
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop:10,
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.04,
    borderRadius: sizes.screenWidth * 0.02,
    overflow:'hidden',
    fontWeight:'600'
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
    fontWeight: 'bold'
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
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.46,
  },
  bottomBtnIOS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.04,
    // alignSelf:'center',
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.42,
  },
  forwardIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.04,
    width: sizes.screenHeight * 0.04,
  },
  bottomBtnText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.02
  },
  scrollViewParent: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.49,
    paddingBottom: sizes.screenHeight * 0.01,
  },
  noCartContainer: {
    height: sizes.screenHeight * 0.82,
    width: sizes.screenWidth,
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyCartImg: {
    width: sizes.screenWidth * 0.25,
    height: sizes.screenWidth * 0.25,
    marginTop: sizes.screenHeight * 0.28,
    marginRight: sizes.screenWidth * 0.05
  },
  noCartText: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '500'
  },

  /////////////////////
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
});
