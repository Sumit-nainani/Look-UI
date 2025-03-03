import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
  OnboardingScreenImageOneStyle: {
    aspectRatio: 1,
    width: 160,
  },
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 0.78,
    justifyContent: 'space-between',
    paddingTop: 24,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  BackGroundColorBoxStyle: {
    aspectRatio: 1,
    width: 160,
    backgroundColor: COLORS.colorBl,
    borderTopLeftRadius: 88,
  },
  BackGroundColorBoxStyleOne: {
    aspectRatio: 1,
    width: 160,
    backgroundColor: COLORS.colorBlue,
    borderBottomRightRadius: 80,
  },
  BackGroundColorBoxStyleTwo: {
    aspectRatio: 1,
    width: 160,
    backgroundColor: COLORS.colorBl,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  textContainer: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
  childTextContainer: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    color: COLORS.colorNeutral,
    textAlign: 'center',
  },
  getStartedButton: {
    borderRadius: 10,
    backgroundColor: COLORS.colorBl,
    borderWidth: 1,
    paddingVertical: 14,
    marginHorizontal: 16,
  },
  getStartedText: {
    color: COLORS.colorWhite,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
