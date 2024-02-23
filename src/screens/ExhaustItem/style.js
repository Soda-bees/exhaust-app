import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  mainContainer: {
    paddingHorizontal: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.02,
  },
  rowText: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: 'bold',
  },
  rowText4: {
    fontSize: fontSize.medium,
    color: colors.gray,
    fontWeight: '500',
  },
  rowText2: {
    fontSize: fontSize.small,
    color: colors.gray,
    // fontWeight:'bold'
  },
  rowText3: {
    color: colors.black,
    fontSize: fontSize.small,
  },
  spareSizes: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenWidth * 0.55,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.04,
    // backgroundColor:'red'
  },
  bottomContainer: {
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.02,
    paddingBottom: sizes.screenHeight * 0.01,
    // height: sizes.screenHeight,
    width: sizes.screenHeight * 0.5,
    // borderRadius: sizes.screenWidth * 0.06,
    borderTopLeftRadius: sizes.screenWidth * 0.06,
    borderTopRightRadius: sizes.screenWidth * 0.06,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  bottomContainerIOS: {
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.06,
    paddingBottom: sizes.screenHeight * 0.045,
    borderTopLeftRadius: sizes.screenWidth * 0.06,
    borderTopRightRadius: sizes.screenWidth * 0.06,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
    alignSelf:'center',
    width:sizes.screenWidth * 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.003,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.01,
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
    // borderWidth:1
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
  starImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.02,
    marginRight: sizes.screenWidth * 0.01,
    // backgroundColor:'red'
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: 'bold',
    marginTop: sizes.screenHeight * 0.02,
  },
  info: {
    color: colors.gray,
    marginTop: sizes.screenHeight * 0.01,
  },
  info2: {
    color: colors.gray,
    // marginTop: sizes.screenHeight * 0.01,
  },
  verticalLine: {
    width: sizes.screenWidth * 0.002,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.gray,
  },
  cartImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.01,
    // backgroundColor:'red'
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.2,
    width: sizes.screenWidth * 0.49,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.btnBlue,
    justifyContent: 'center',
  },
  btnDis: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.2,
    width: sizes.screenWidth * 0.49,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.gray,
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
    fontSize: fontSize.smallM,
    marginLeft: sizes.screenWidth * 0.03,
  },
  progressBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.02,
    // justifyContent: 'space-between',
  },
  soundIconSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenWidth * 0.11,
    // backgroundColor:'red'
  },
  progressBar: {
    // backgroundColor:'red',
    width: sizes.screenWidth * 0.76,
    marginLeft: sizes.screenWidth * 0.03,
  },
  // thumb: {
  //   position: 'absolute',
  //   marginLeft: sizes.screenWidth * 0.12, // Adjust based on the thumb width
  //   // top: -5, // Adjust based on the thumb height
  //   width: sizes.screenWidth * 0.03, // Adjust based on the thumb width
  //   height: sizes.screenWidth * 0.03, // Adjust based on the thumb height
  //   borderRadius: 10, // Make it a circle
  //   backgroundColor: colors.btnBlue, // Adjust the color as needed
  // },
  imageSlider: {
    // backgroundColor:'red',
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.2
  },
  sliderImg: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.2,
    // backgroundColor:'green'
  },
  modalView: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    padding: sizes.screenWidth * 0.04
  },
  text1: {
    textAlign: 'center',
    fontSize: fontSize.large,
    fontWeight: '600',
    marginBottom: sizes.screenWidth * 0.02,
    color: colors.black
  },
  text2: {
    fontSize: fontSize.smallM,
    color: colors.black
  },
  outOfStock: {
    color: colors.error,
    fontSize: fontSize.smallM,
    fontWeight: '500'
  },

  // margin:{
  //   height:sizes.screenHeight * 0.08,
  //   backgroundColor:'white'
  // }

});
