import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
    container: {
        width: sizes.screenWidth,
        height: sizes.screenHeight,
        backgroundColor: colors.white,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomBtn2: {
        width: sizes.screenWidth * 0.9,
        height: sizes.screenHeight * 0.065,
        justifyContent: 'center',
        borderRadius: sizes.screenWidth * 0.3,
        backgroundColor: colors.btnBlue,
        marginTop: sizes.screenHeight * 0.02,
    },
    bottomBtnText2: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: '500',
    },
    img: {
        resizeMode: 'contain',
        width: sizes.screenWidth * 0.45,
        height: sizes.screenWidth * 0.55,
        alignSelf:'center'
    },
    text1:{
        textAlign:'center',
        fontSize:fontSize.h3,
        fontWeight:'800',
        marginTop:sizes.screenHeight * 0.02,
        color:colors.black
    },
    text2:{
        textAlign:'center',
        color:colors.disabledBg2,
        fontSize:fontSize.smallM,
        marginTop:sizes.screenHeight * 0.01
    }
});
