import { StyleProp, StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  topMainContainer: {
    padding: sizes.screenWidth * 0.05,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagesStylingLeft: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenWidth * 0.1,
  },
  imagesStylingRight: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenWidth * 0.12,
    borderRadius: sizes.screenWidth * 0.06
  },

  searchFilterView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    marginTop: sizes.screenWidth * 0.04,
  },

  inputContainetr: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.77,
    height: sizes.screenHeight * 0.056,
    borderRadius: sizes.screenWidth * 0.2,
  },
  headingTextStyling: {
    marginTop: sizes.screenHeight * 0.04,
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.black,
  },
  subHeadingTextStyling: {
    fontSize: fontSize.h7,
    fontWeight: 'bold',
    color: colors.textGrey,
  },
  searchImgStyling: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
    marginLeft: sizes.screenWidth * 0.04,
    marginRight: sizes.screenWidth * 0.02,
  },
  filterImgStyling: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenWidth * 0.1,
  },
  textFieldStyling: {
    marginTop: sizes.screenWidth * 0.01,
    width: sizes.screenWidth * 0.65,
    color: colors.black
  },
  popularheadingLeft: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fontSize.large,
    marginTop: sizes.screenWidth * 0.03,
    paddingBottom: sizes.screenHeight * 0.01
  },
  lastMainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.02,
  },
  lastLeftView: {
    borderRadius: sizes.screenWidth * 0.03,
    padding: sizes.screenWidth * 0.015,
    width: sizes.screenWidth * 0.41,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,

    elevation: 8,
    backgroundColor: colors.white,
  },

  lastLeftViewImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.37,
    height: sizes.screenHeight * 0.13,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  priceAndPlusSignView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: sizes.screenWidth * 0.01,
  },
  plusSignImg: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
  },
  lastLeftViewTextHeading: {
    fontSize: fontSize.extraLarge,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: sizes.screenWidth * 0.03,
    left: sizes.screenWidth * 0.01,
  },
  lastLeftViewTextHeading1: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: sizes.screenWidth * 0.02,
  },
  lastLeftViewTextPara: {
    fontSize: fontSize.small,
    color: colors.black,
    left: sizes.screenWidth * 0.01,
  },
  bg: {
    backgroundColor: 'transparent',
    width: sizes.screenWidth * 0.42,
  },
  plusImgView: {
    left: sizes.screenWidth * 0.005,
    top: sizes.screenWidth * 0.016,
  },
  modalMainView: {
    alignSelf: 'center',
    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.52,
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.45,
    borderTopLeftRadius: sizes.screenWidth * 0.06,
    borderTopRightRadius: sizes.screenWidth * 0.06,
  },
  horizontalLine: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.007,
    backgroundColor: colors.disabledBg3,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    marginTop: sizes.screenHeight * 0.02,
  },
  modalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.015,
  },
  crossImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.02,
  },
  modalText: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.019,
  },
  carName: {
    color: colors.black,
    borderWidth: 1,
    paddingHorizontal: sizes.screenWidth * 0.09,
    paddingVertical: sizes.screenHeight * 0.01,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: sizes.screenWidth * 0.1,
    fontSize: fontSize.smallM,
    marginLeft: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.01,
  },
  carNameSelected: {
    color: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.09,
    paddingVertical: sizes.screenHeight * 0.01,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: sizes.screenWidth * 0.1,
    fontSize: fontSize.smallM,
    marginLeft: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.01,
    backgroundColor: colors.btnBlue,
  },
  btnView: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenWidth * 0.2,
    backgroundColor: colors.btnBlue,
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.medium,
  },
  filerNameStyling: {
    fontSize: fontSize.small,
    color: colors.black,
    fontWeight: '500',
    marginTop: sizes.screenWidth * 0.01,
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.3,
    marginLeft: sizes.screenWidth * 0.02,
    marginBottom: sizes.screenWidth * 0.01,
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenHeight * 0.004,
    borderColor: colors.black,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  filterView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: sizes.screenHeight * 0.01,
  },
  brandModal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },
  productMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.9,
    marginLeft: sizes.screenWidth * 0.025,
    marginVertical: sizes.screenHeight * 0.02
  },
  scrollViewParent: {
    height: sizes.screenHeight * 0.65,
  },
  scrollViewParent2: {
    height: sizes.screenHeight * 0.58,
  }
});
