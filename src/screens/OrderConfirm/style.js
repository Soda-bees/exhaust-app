import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bglightblue,
        width: sizes.screenWidth,
        height: sizes.screenHeight,
      },
      mainContainer: {
        paddingHorizontal: sizes.screenWidth * 0.05,
      },
      tickImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.5,
        height:sizes.screenWidth * 0.5,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.17
      },
      textSty1:{
        fontSize:fontSize.large,
        fontWeight:'bold',
        color:colors.black,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.03
      },
      textSty2:{
        fontSize:fontSize.smallM,
        // fontWeight:'bold',
        color:colors.black,
        textAlign:'center',
        paddingHorizontal:sizes.screenWidth * 0.13,
        marginTop:sizes.screenHeight * 0.01
      },
      textBold:{
        color:colors.black,
        fontWeight:'bold'
      },
      bottomBtn: {
        marginLeft: sizes.screenWidth * 0.01,
        marginTop: sizes.screenHeight * 0.1,
        borderRadius:sizes.screenWidth * 0.1,    
        height: sizes.screenHeight * 0.07,
        backgroundColor:colors.black,
        width: sizes.screenHeight * 0.44,
        justifyContent:'center'
      },
      bottomBtn1: {
        marginLeft: sizes.screenWidth * 0.01,
        marginTop: sizes.screenHeight * 0.02,
        borderRadius:sizes.screenWidth * 0.1,    
        height: sizes.screenHeight * 0.07,
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