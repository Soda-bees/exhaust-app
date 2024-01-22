import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    topMainView: {
        // flex:1,
        // paddingHorizontal:sizes.screenWidth * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: sizes.screenHeight * 0.12,
        // backgroundColor:'red',
        // height:sizes.screenHeight * 0.6
    },
    forgotPassHeadingText: {
        fontWeight: '700',
        color: colors.black,
        fontSize: fontSize.h5,
        marginBottom: sizes.screenHeight * 0.02
    },
    forgotPassParaText: {
        fontSize: fontSize.smallM,
        color: colors.textGrey,
    },
    emailLabelStyling: {
        marginTop: sizes.screenHeight * 0.07,
        marginRight: sizes.screenWidth * 0.7,
        color: colors.black,
        fontSize: fontSize.small,
    },
    textStylingStyling: {
        borderWidth: 1,
        width: sizes.screenWidth * 0.9,
        borderRadius: sizes.screenWidth * 0.3,
        paddingLeft: sizes.screenWidth * 0.05,
        borderColor: colors.borderGrey,
        marginTop: sizes.screenHeight * 0.005,
        color: colors.black
    },
    continueBtnStyling: {
        marginTop: sizes.screenHeight * 0.12,
        borderWidth: 1,
        width: sizes.screenWidth * 0.9,
        borderRadius: sizes.screenWidth * 0.3,
        paddingLeft: sizes.screenWidth * 0.05,
        borderColor: colors.borderGrey,
        height: sizes.screenWidth * 0.13,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.btnBlue,
    },
    btnTextColor: {
        color: colors.white
    },
    loaderContainer: {
        marginTop: sizes.screenHeight * 0.123,
    },
    errorText: {
        color: colors.red,
        fontSize: fontSize.medium,
        fontWeight: '500',
        width: sizes.screenWidth * 0.85,
        marginTop: sizes.screenHeight * 0.01,
    }
})