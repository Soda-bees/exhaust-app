import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bglightblue,
        width: sizes.screenWidth,
        height: sizes.screenHeight,
    },
    scrollViewParent: {
        width: sizes.screenWidth,
        height: sizes.screenHeight * 0.9,
        backgroundColor: 'transparent',
    },
    cartContainer: {
        paddingVertical: sizes.screenHeight * 0.02,
        gap: sizes.screenHeight * 0.01,
    },

    cardItem: {
        width: sizes.screenWidth * 0.9,
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: colors.white,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,

        paddingVertical: sizes.screenHeight * 0.015,
        paddingHorizontal: sizes.screenWidth * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'

    },

    itemImg: {
        height: sizes.screenHeight * 0.08,
        width: sizes.screenWidth * 0.2,
        backgroundColor: colors.disabledBg,
        borderRadius: 12,
        marginRight: sizes.screenWidth * 0.03
    },

    itemTextBold: {
        fontSize: fontSize.medium,
        fontWeight: '700',
        color: colors.black
    },

    itemTextLight: {
        fontSize: fontSize.smallM,
        color: colors.disabledBg2,
        marginBottom: sizes.screenHeight * 0.01
    }
    ,
    itemTextLightTime: {
        fontSize: fontSize.small,
        color: colors.disabledBg2,
    }

});
