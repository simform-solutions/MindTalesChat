import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './styles/SplashScreenStyles';

const SplashScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.textStyle}>{'SimformRN'}</Text>
  </View>
);

export default SplashScreen;
