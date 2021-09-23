import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  scale,
  verticalScale,
} from '../../../theme';

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
  itemContainer: { padding: scale(15) },
  nameStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  msgStyle: {
    fontSize: scale(12),
    color: Colors.gray,
    marginEnd: scale(20),
  },
  title: {
    maxWidth: scale(200),
    fontSize: verticalScale(16),
    fontFamily: Fonts.type.bold,
    color: Colors.black,
    paddingHorizontal: scale(16),
    paddingVertical: scale(4),
  },
  profileviewContainer: {
    flexDirection: 'column',
    padding: scale(8),
    backgroundColor: Colors.purpule,
    alignItems: 'center',
  },
  profileitemContainer: { padding: scale(6), alignItems: 'center' },
  profilenameStyle: {
    fontSize: scale(12),
    color: Colors.gray,
  },
  profilebuttonStyle: {
    height: scale(40),
  },
});

export default styles;
