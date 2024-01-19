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
    backgroundColor: 'teansparent',
    height: sizes.screenHeight * 0.8
  },
  headingSty: {
    color: colors.black,
    fontWeight: '600',
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.06,
    marginBottom: sizes.screenHeight * 0.02
  },
  headingSty2: {
    color: colors.black,
    // fontWeight:'600',
    // marginTop:sizes.screenHeight * 0.05,
    marginLeft: sizes.screenHeight * 0.01
  },
  card: {
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.275,
    marginTop: sizes.screenHeight * 0.01,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: sizes.screenWidth * 0.06,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.01,
    marginLeft: sizes.screenWidth * 0.06
  },
  checkBox: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.05,
  },
  cardNo: {
    color: colors.white,
    marginTop: sizes.screenHeight * 0.07,
    fontSize: fontSize.h3
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.6
  },
  text: {
    color: colors.disabledBg,
    fontWeight: "500"
  },
  text2: {
    color: colors.white,
    // fontWeight:"200"
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
  icon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.022,
    width: sizes.screenHeight * 0.02,
    // marginTop: sizes.screenHeight * 0.01,
    marginRight: sizes.screenWidth * 0.03
  },
  icon2: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.022,
    width: sizes.screenHeight * 0.02,
    // marginTop: sizes.screenHeight * 0.01,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
    marginRight: sizes.screenWidth * 0.06
  },

  checkView: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.05
  }
})