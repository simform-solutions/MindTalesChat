import {StyleSheet} from 'react-native';
import {ApplicationStyles, scale} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  profilePic: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50) / 2,
    marginEnd: 10,
    resizeMode: 'cover',
  },
  rowContainer: {
    flexDirection: 'row',
    margin: scale(10),
    alignItems: 'center',
  },
  textStyle: {
    fontSize: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
