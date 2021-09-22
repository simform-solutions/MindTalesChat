import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationRoutes } from '../../constants';
import { retrieveData } from '../../services/AsyncStorageService';
import styles from './styles/SplashScreenStyles';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    async function checkLogin() {
      retrieveData('userLoginData', loginData => {
        if (loginData) {
          navigation.reset({
            index: 0,
            routes: [{ name: NavigationRoutes.ChatStack }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: NavigationRoutes.AuthStack }],
          });
        }
      });
    }
    setTimeout(() => {
      checkLogin();
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.textStyle}>{'MindTales Chat'}</Text>
    </View>
  );
};

export default SplashScreen;
