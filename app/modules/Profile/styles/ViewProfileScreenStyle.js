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
  lableStyle: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
    paddingVertical: scale(10),
  },
  textStyle: {
    fontSize: moderateScale(15),
    color: Colors.black,
    textAlign: 'center',
    paddingVertical: scale(10),
  },
  profilePicContainer: {
    height: scale(120),
    width: scale(120),
    borderRadius: scale(120) / 2,
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: scale(25),
    borderColor: Colors.primary,
  },
  profilePic: {
    height: scale(118),
    width: scale(118),
    borderRadius: scale(118) / 2,
    resizeMode: 'cover',
  },
  contentContainerStyle: {
    flexGrow: 1,
    margin: scale(15),
  },
  footer: {
    width: '100%',
    borderRadius: scale(15),
    // height: 150,
    backgroundColor: '#f3e8ff',
    justifyContent: 'center',
    //position: 'absolute', //Here is the trick
    // bottom: 0, //Here is the trick
    padding: scale(20),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
