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
    marginTop: sizes.screenHeight * 0.02,
    height: sizes.screenHeight * 0.84
  },
  row: {
    flexDirection: 'row'
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.02,
    padding: sizes.screenHeight * 0.01,
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.01,
  },

  itemDetails: {
    flexDirection: 'row',
  },

  ferrariF12ExhaustContainer: {
    backgroundColor: colors.borderColor,
    borderRadius: sizes.screenHeight * 0.02,
    marginRight: sizes.screenHeight * 0.012,
  },

  ferrariF12Exhaust: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenWidth * 0.15,
  },
  brandName: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '600',
  },
  exhaustType: {
    fontSize: fontSize.smallM,
    color: colors.textGrey,
    width: sizes.screenWidth * 0.7
  },

  exhaustPrice: {
    fontWeight: '600',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
  },
  timeSty: {
    color: colors.disabledBg3,
    fontSize: fontSize.small,
    position: 'absolute',
    right: 0,
    paddingTop: sizes.screenWidth * 0.02,
    paddingRight: sizes.screenWidth * 0.02
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.medium,
    marginLeft: sizes.screenWidth * 0.02,
    marginTop: sizes.screenWidth * 0.01,
  },
})