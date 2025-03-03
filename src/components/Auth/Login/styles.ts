import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  enterText: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: COLORS.colorBl,
  },
  textInputBg: {
    width: '100%',
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'background: rgba(219, 219, 219, 1)',
    marginVertical: 16,
  },
  confirmText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: COLORS.colorBl,
  },
  enabledTouchableViewBg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.colorBl,
    marginVertical: 10,
  },
  enabledRegisterText: {
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 1)',
  },
  disabledTouchableViewBg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'background: rgba(107, 107, 107, 1)',
    marginVertical: 10,
  },
  disabledRegisterText: {
    fontSize: 18,
    lineHeight: 20,
    color: 'background: rgba(197, 197, 197, 1)',
  },
  textInputValidNumberBg: {
    borderWidth: 1,
    borderColor: 'rgba(134, 217, 177, 1)',
    backgroundColor: 'rgba(230, 242, 237, 1)',
  },
});

export default styles;
