import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bglightblue,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  mainContainer: {
    paddingHorizontal: sizes.screenWidth * 0.05,
  },
  profileImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.23,
    height: sizes.screenWidth * 0.23,
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenHeight * 0.16,
  },
  iconImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.04,
    // backgroundColor:'red'
  },
  iconImgStyBottom: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.03,
  },
  fieldView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.disabledBg3,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenWidth * 0.1,
    marginTop: sizes.screenHeight * 0.04,
  },
  verticalLine: {
    width: sizes.screenWidth * 0.001,
    height: sizes.screenHeight * 0.02,
    backgroundColor: colors.black,
    marginLeft: sizes.screenWidth * 0.03,
    marginRight: sizes.screenWidth * 0.03,
  },
  textSty: {
    color: colors.black,
    fontSize: fontSize.small,
  },
  labelTextSty: {
    width: sizes.screenWidth * 0.11,
    color: colors.black,
    fontSize: fontSize.small,
    backgroundColor: colors.labelBdColor,
    position: 'absolute',
    top: sizes.screenHeight * 0.03,
    left: sizes.screenHeight * 0.055,
    zIndex: 10,
    textAlign: 'center',
  },
  bottomMainView:{
    paddingHorizontal:sizes.screenWidth * 0.04,
    borderWidth:1,
    borderRadius:sizes.screenWidth * 0.04,
    borderColor:colors.disabledBg2,
    backgroundColor:colors.white,
    height:sizes.screenHeight * 0.16
  },
  bottomView:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:sizes.screenHeight * 0.026
  },
  textStyling:{
    color:colors.black,
    fontWeight:'bold',
    fontSize:fontSize.small,
    marginLeft:sizes.screenWidth * 0.04
  },
  textStyling2:{
    color:colors.disabledBg3,
    fontWeight:'bold',
    fontSize:fontSize.small,
    marginLeft:sizes.screenWidth * 0.04,
    position:'absolute',
    right:sizes.screenWidth * 0.08
  },
  bottonIconImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenWidth * 0.04,
    position:'absolute',
    right:0
  },
  bottomHeading:{
    color:colors.black,
    marginTop:sizes.screenHeight * 0.04,
    marginBottom:sizes.screenHeight * 0.02,
    fontWeight:'bold',
    fontSize:fontSize.large
  },
  btnIconImgSty:{
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.04,
    marginLeft: sizes.screenWidth * 0.04,
  },
  btnIconView:{
    position:'absolute',
    right:0,
  },
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.044,
    paddingHorizontal: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    borderRadius:sizes.screenWidth * 0.1,    
    height: sizes.screenHeight * 0.06,
    backgroundColor:colors.btnBlue,
    width: sizes.screenHeight * 0.45,
  },
  forwardIcon: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.025,
  },
  bottomBtnText:{
    color:colors.white,
    fontSize:fontSize.medium,
    fontWeight:'500',
    marginLeft:sizes.screenWidth * 0.02
  },
});
