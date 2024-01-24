import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontFamily, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor:'red',
        marginTop: sizes.screenHeight * 0.03,
        paddingHorizontal: sizes.screenWidth * 0.04
    },
    imgSty: {
        resizeMode: 'contain',
        width: sizes.screenWidth * 0.06,
        height: sizes.screenWidth * 0.06,
    },
    cartImgSty: {
        resizeMode: 'contain',
        width: sizes.screenWidth * 0.1,
        height: sizes.screenWidth * 0.1,
    },
    headerText: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: colors.black
    },
    headerText2: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: colors.black,
        marginRight:'auto',
        marginLeft:'auto',
        paddingRight:sizes.screenWidth * 0.04
    },
    cartImgTouchable: {
        position: 'relative'
    },
    notificationView: {
        zIndex: 1,
        width: sizes.screenWidth * 0.05,
        height: sizes.screenWidth * 0.05,
        backgroundColor: colors.red,
        borderRadius: sizes.screenWidth * 0.03,
        position: 'absolute',
        left: 25,
        bottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.white,
        fontWeight: '500',
        fontSize:fontSize.smallM
    }
})