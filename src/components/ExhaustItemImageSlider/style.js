import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
    //   imageSlider:{
    //     // backgroundColor:'red',
    //     width:sizes.screenWidth,
    //     height:sizes.screenHeight * 0.2
    //   },
    //   sliderImg:{
    //     width:sizes.screenWidth ,
    //     height:sizes.screenHeight * 0.2,
    //     // backgroundColor:'green'
    //   }
    imageSlider: {
        height: sizes.screenHeight * 0.37
    },
    sliderImg: {
        width: sizes.screenWidth,
        height: sizes.screenHeight * 0.35,
    },
    bulletContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: sizes.screenHeight * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bullet: {
        width: sizes.screenWidth * 0.02,
        height: sizes.screenWidth * 0.02,
        borderRadius: sizes.screenWidth * 0.02,
        marginHorizontal: sizes.screenWidth * 0.015,
        backgroundColor: colors.grayBorder
    },
    bulletActive: {
        width: sizes.screenWidth * 0.02,
        height: sizes.screenWidth * 0.02,
        borderRadius: sizes.screenWidth * 0.02,
        marginHorizontal: sizes.screenWidth * 0.015,
        backgroundColor: colors.btnBlue,
    },
    bulletActiveContainer: {
        width: sizes.screenWidth * 0.045,
        height: sizes.screenWidth * 0.045,
        borderRadius: sizes.screenWidth * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.btnBlue
    }

});
