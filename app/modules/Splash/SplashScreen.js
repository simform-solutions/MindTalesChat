import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {NavigationRoutes} from '../../constants';
import {clearStack} from '../../navigation/services/navigationServices';
import {retrieveData} from '../../services/AsyncStorageService';
import styles from './styles/SplashScreenStyles';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 2000);
  }, []);
  function checkLogin() {
    retrieveData('userLoginData', loginData => {
      if (loginData) {
        clearStack(navigation, NavigationRoutes.HomeStack);
      } else {
        clearStack(navigation, NavigationRoutes.AuthStack);
      }
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.textStyle}>{'MindTales Chat'}</Text>
    </View>
  );
};

export default SplashScreen;
