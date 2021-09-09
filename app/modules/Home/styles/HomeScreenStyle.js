import {StyleSheet} from 'react-native';
import {ApplicationStyles, scale} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  profilePic: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50) / 2,
    resizeMode: 'cover',
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: scale(15),
    marginVertical: scale(5),
    alignItems: 'center',
  },
  itemContainer: {padding: scale(15)},
  nameStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  msgStyle: {
    fontSize: scale(12),
    color: 'gray',
    marginEnd: scale(20),
  },
});

export default styles;
