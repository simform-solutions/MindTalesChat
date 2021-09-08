import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image} from 'react-native';
import {NavigationRoutes} from '../constants';
import LoginScreen from '../modules/Auth/LoginScreen';
import RegisterScreen from '../modules/Auth/RegisterScreen';
import HomeScreen from '../modules/Home/HomeScreen';
import SplashScreen from '../modules/Splash/SplashScreen';
import {Colors, Icons} from '../theme';
import {navigationRef} from './services/navigationServices';
import styles from './styles/AppNavigationStyles';

const RootStack = createStackNavigator();
const renderImage = () => {
  return <Image source={Icons.back} />;
};

const stackScreenOptions = {
  headerBackTitleVisible: false,
  headerLeftContainerStyle: styles.backButtonStyle,
  headerTintColor: Colors.blackHeaderText,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerText,
  headerStyle: styles.headerStyle,
  headerBackImage: renderImage,
  cardStyle: {
    backgroundColor: Colors.white,
  },
};

const AuthStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name={NavigationRoutes.LoginScreen}
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.RegisterScreen}
        options={{headerShown: false}}
        component={RegisterScreen}
      />
    </RootStack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name={NavigationRoutes.HomeScreen}
        options={{headerShown: false}}
        component={HomeScreen}
      />
    </RootStack.Navigator>
  );
};

// Manifest of possible screens
const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={stackScreenOptions}>
        <RootStack.Screen
          name={NavigationRoutes.SplashScreen}
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <RootStack.Screen
          name={NavigationRoutes.AuthStack}
          options={{headerShown: false}}
          component={AuthStack}
        />
        <RootStack.Screen
          name={NavigationRoutes.HomeStack}
          options={{headerShown: false}}
          component={HomeStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
