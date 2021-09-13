import {StyleSheet} from 'react-native';
import {Colors, Fonts, horizontalScale, moderateScale} from '../../theme';

export default StyleSheet.create({
  backButtonStyle: {
    paddingStart: horizontalScale(13),
  },
  headerStyle: {
    backgroundColor: Colors.whiteHeader,
    elevation: 0,
  },
  headerText: {
    fontFamily: Fonts.type.GTWalsheimProMedium,
    fontSize: moderateScale(17),
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Colors.blackHeaderText,
  },
  blueHeader: {
    backgroundColor: Colors.lightblueHeader,
    borderWidth: 0,
    elevation: 0,
    borderColor: Colors.lightblueHeader,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  whiteHeader: {
    backgroundColor: Colors.whiteHeader,
    borderWidth: 0,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  leftIcon: {
    width: moderateScale(29),
    height: moderateScale(33),
    paddingLeft: horizontalScale(12),
  },
  tabBarIcon: {
    marginBottom: moderateScale(-5),
  },
  rightTextButton: {
    marginEnd: horizontalScale(16),
    fontFamily: Fonts.type.GTWalsheimProRegular,
    fontSize: moderateScale(14),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Colors.primary,
  },
  tabIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
