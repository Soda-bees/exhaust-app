import {StyleSheet} from 'react-native';
import {colors} from '../../services/utilities/colors';
import {fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
    loaderContainer: {
        backgroundColor: colors.btnBlue,
        height: sizes.screenHeight * 0.06,
        borderRadius: sizes.screenHeight * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: sizes.screenHeight * 0.015,
        width:sizes.screenWidth * 0.9
      },
});
