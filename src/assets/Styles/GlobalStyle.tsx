import {StyleSheet} from 'react-native';
import {colors} from './Colors';

export const Gs = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  bgPrimary: {
    backgroundColor: colors.primary,
  },
  bgSecondary: {
    backgroundColor: colors.secondary,
  },
  bgWhite: {
    backgroundColor: colors.white,
  },
  font400: {
    fontWeight: '400',
  },
  font600: {
    fontWeight: '600',
  },
  font700: {
    fontWeight: '700',
  },
  h1: {
    fontSize: 22,
    fontWeight: '700',
  },
  h2: {
    fontSize: 18,
    fontWeight: '700',
  },
  h3: {
    fontSize: 16,
    fontWeight: '700',
  },
  h4: {
    fontSize: 14,
    fontWeight: '600',
  },
  h5: {
    fontSize: 12,
    fontWeight: '600',
  },
  textBlack: {
    color: colors.black,
  },
  textGrey: {
    color: colors.grey,
  },
  textWhite: {
    color: colors.white,
  },
  textPrimary: {
    color: colors.primary,
  },
  textSecondary: {
    color: colors.secondary,
  },
  textCenter: {
    textAlign: 'center',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
});
