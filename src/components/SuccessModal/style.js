import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: colors.white,
        width: sizes.screenWidth * 0.75,
        alignSelf: 'center',
        borderRadius: sizes.screenWidth * 0.05,
        paddingVertical:sizes.screenWidth * 0.06
    },
    img: {
        width: sizes.screenWidth * 0.3,
        height: sizes.screenWidth * 0.3,
        alignSelf: 'center',
        resizeMode:'contain'
    },
    text: {
        textAlign: 'center',
        color: colors.black,
        fontWeight: '500',
        fontSize: fontSize.medium,
        marginTop:sizes.screenHeight * 0.02,
    },
    btn:{
        width:sizes.screenWidth * 0.5,
        backgroundColor:colors.btnBlue,
        alignSelf:'center',
        marginTop:sizes.screenHeight * 0.02,
        paddingVertical:sizes.screenWidth * 0.03,
        borderRadius:sizes.screenWidth * 0.02
    },
    btnText:{
        color:colors.white,
        textAlign:'center',
        fontWeight:'500',
        fontSize:fontSize.medium
    }
});
