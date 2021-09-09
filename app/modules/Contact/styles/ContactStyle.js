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
    margin: 10,
    width: '100%',
    alignItems: 'center',
  },
  itemContainer: {paddingHorizontal: 10},
  textStyle: {
    fontSize: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgStyle: {
    fontSize: 12,
  },
});

export default styles;
