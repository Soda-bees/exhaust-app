import {StyleSheet} from 'react-native';
import { colors, sizes } from '../../services';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bglightblue,
        width: sizes.screenWidth,
        height: sizes.screenHeight,
      },
      mainContainer: {
        paddingHorizontal: sizes.screenWidth * 0.05,
      },
      headingSty:{
        color:colors.black,
        fontWeight:'600',
        marginTop:sizes.screenHeight * 0.05
      },
      headingSty2:{
        color:colors.black,
        // fontWeight:'600',
        // marginTop:sizes.screenHeight * 0.05,
        marginLeft:sizes.screenHeight * 0.01
      },
      card:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.29,
        marginTop:sizes.screenHeight * 0.01, 
        // shadowColor: '#000000',
        // shadowOffset: {
        //   width: 0,
        //   height: 3,
        // },
        // shadowOpacity: 0.17,
        // shadowRadius: 3.05,
        // elevation: 4,
        // backgroundColor:colors.white
      },
      row:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:sizes.screenHeight * 0.01, 
      },
      checkBox:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.05,
        height:sizes.screenHeight * 0.05,
      }
})