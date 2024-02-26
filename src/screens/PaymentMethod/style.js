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
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.06,
    fontSize:fontSize.medium
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
    fontSize: fontSize.h5
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
  bottomBtnIOS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginLeft: sizes.screenWidth * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.065,
    backgroundColor: colors.btnBlue,
    width: sizes.screenHeight * 0.42,
    alignSelf:'center',
    position:'absolute',
    bottom:sizes.screenHeight * 0.1
    // marginBottom: sizes.screenHeight * 0.2
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
    marginRight: sizes.screenWidth * 0.06
  },

  checkView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.05
  },
  noCardContainer:{
    width:sizes.screenWidth ,
    height:sizes.screenHeight * 0.78,
    flexDirection:'column',
    alignItems:'center'
  },
  noCardImg: {
    width: sizes.screenWidth * 0.25,
    height: sizes.screenWidth * 0.25,
    marginTop: sizes.screenHeight * 0.25,
  },
  nocardText: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '500'
  },

  modalContainer: {
    width: sizes.screenWidth * 0.83,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    paddingVertical: sizes.screenHeight * 0.03
  },
  deleteCartImg: {
    width: sizes.screenWidth * 0.18,
    height: sizes.screenWidth * 0.18,
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
})