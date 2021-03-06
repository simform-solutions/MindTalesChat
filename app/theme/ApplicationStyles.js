import colors from './Colors';
import Colors from './Colors';
import { Metrics, scale, verticalScale } from './Metrics';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    normalFooterStyle: {
      backgroundColor: Colors.transparent,
      borderTopWidth: 0,
      elevation: 0,
      marginBottom: verticalScale(20),
    },
    whiteContainer: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    whiteContainerCenter: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    noBorderStyle: {
      borderBottomWidth: Metrics.zero,
    },
    topBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius,
      borderTopRightRadius: Metrics.textFieldRadius,
    },
    bottomBorderRadius: {
      borderBottomLeftRadius: Metrics.textFieldRadius,
      borderBottomRightRadius: Metrics.textFieldRadius,
    },
    topLeftBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius,
    },
    topRightBorderRadius: {
      borderTopRightRadius: Metrics.textFieldRadius,
    },
  },
  form: {
    textInput: {
      height: verticalScale(50),
      width: scale(300),
      borderRadius: scale(5),
      borderWidth: scale(1),
      borderColor: Colors.secondary,
      paddingLeft: scale(10),
    },
    formContainer: {
      alignItems: 'center',
      padding: scale(10),
    },
    formInputs: {
      marginTop: verticalScale(50),
      alignItems: 'center',
    },
    renderFormInput: {
      backgroundColor: colors.white,
      marginTop: scale(30),
      width: '95%',
      marginBottom: scale(10),
      borderTopLeftRadius: 60,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      flex: 1,
    },
  },
};

export default ApplicationStyles;
