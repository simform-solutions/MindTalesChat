import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Fonts,
  Colors,
  moderateScale,
  verticalScale,
  scale,
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  alignCenter: {
    alignItems: 'center',
  },
  profilePic: {
    height: scale(118),
    width: scale(118),
    borderRadius: scale(118) / 2,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: moderateScale(25),
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: Colors.primary,
  },
  redBorder: {
    borderColor: Colors.red,
  },
  buttonContainer: {
    marginTop: verticalScale(30),
  },
  contentContainerStyle: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    marginTop: verticalScale(20),
  },
  signupText: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: Colors.primary,
  },
});

export default styles;
