import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, moderateScale, Fonts} from '../../../theme';
const styles = StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.whiteContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: moderateScale(30),
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default styles;
