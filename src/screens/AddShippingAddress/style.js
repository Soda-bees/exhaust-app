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
    marginTop:sizes.screenHeight * 0.04
  },
  MainCartView: {
    paddingHorizontal: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.02,
    height: sizes.screenHeight * 0.08,
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
  },
  labelName:{
    fontSize:fontSize.small,
    paddingTop:sizes.screenHeight * 0.01,
    paddingLeft:sizes.screenWidth * 0.01,

  },
  inputField:{
    color:colors.black,
    width:sizes.screenWidth * 0.7,
    height:sizes.screenHeight * 0.045,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  arrowSizing:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.03,
    height:sizes.screenWidth * 0.03,
  },
  bottomBtn: {
    marginLeft: sizes.screenWidth * 0.01,
    marginTop: sizes.screenHeight * 0.22,
    borderRadius:sizes.screenWidth * 0.1,    
    height: sizes.screenHeight * 0.06,
    backgroundColor:colors.btnBlue,
    width: sizes.screenHeight * 0.44,
    justifyContent:'center'
  },
  bottomBtnText:{
    color:colors.white,
    fontSize:fontSize.medium,
    textAlign:'center',
  },
   })