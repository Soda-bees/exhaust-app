import { StyleSheet } from 'react-native';
import { colors } from '../../services/utilities/colors';
import { fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
    bgImg: {
        width: sizes.screenWidth,
        height: sizes.screenHeight,
        paddingHorizontal: sizes.screenWidth * 0.08,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    logo: {
        width: sizes.screenWidth * 0.35,
        height: sizes.screenWidth * 0.35,
        marginTop: sizes.screenHeight * 0.1
    },
    text1: {
        fontSize: fontSize.h1,
        fontWeight: '800',
        color: colors.black,
        marginTop: sizes.screenHeight * 0.02
    },
    text1IOS: {
        fontSize: fontSize.h2,
        fontWeight: '700',
        color: colors.black,
        marginTop: sizes.screenHeight * 0.04
    },
    text2: {
        width: sizes.screenWidth * 0.5,
        marginTop: sizes.screenHeight * 0.03,
        lineHeight: sizes.screenHeight * 0.022,
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '500',
        fontSize: fontSize.smallM
    },
    btn: {
        width: sizes.screenWidth * 0.46,
        height: sizes.screenHeight * 0.05,
        backgroundColor: colors.btnBlue,
        borderRadius: sizes.screenWidth * 0.06,
        marginTop: sizes.screenHeight * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnImg: {
        width: sizes.screenWidth * 0.15,
        height: sizes.screenWidth * 0.1,
        resizeMode: 'contain',
        marginLeft: sizes.screenWidth * 0.02
    },
    btnText: {
        color: colors.white
    }
});
