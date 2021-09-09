import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { NavigationRoutes } from '../constants';
import LoginScreen from '../modules/Auth/LoginScreen';
import RegisterScreen from '../modules/Auth/RegisterScreen';
import HomeScreen from '../modules/Home/HomeScreen';
import SplashScreen from '../modules/Splash/SplashScreen';
import { Colors, Icons } from '../theme';
import { navigationRef } from './services/navigationServices';
import styles from './styles/AppNavigationStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../modules/Profile/ProfileScreen';
import ChatScreen from '../modules/Chat/ChatScreen';
import ContactScreen from '../modules/Contact/ContactScreen';
import icons from '../assets/icons';

const RootStack = createStackNavigator();
const DashBoardStack = createBottomTabNavigator();

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
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.RegisterScreen}
        options={{ headerShown: false }}
        component={RegisterScreen}
      />
    </RootStack.Navigator>
  );
};
const ChatStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name={NavigationRoutes.HomeScreen}
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.ChatScreen}
        options={{ headerShown: false }}
        component={ChatScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.ContactScreen}
        options={{ headerShown: false }}
        component={ContactScreen}
      />
    </RootStack.Navigator>
  );
};
const getTabBarVisibility = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === NavigationRoutes.ChatScreen || NavigationRoutes.ContactScreen) {
    return false;
  }

  return true;
};
const HomeStack = () => {
  return (
    <DashBoardStack.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   if (route.name === 'Chat') {
        //     iconName = focused
        //       ? icons.chat
        //       : icons.newchat;
        //   }
        //   // You can return any component that you like here!
        //   return <Image source={iconName} width={20} height={20} color={color} />;
        // },
      })
    }
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.secondary,
        upperCaseLabel: true,
        tabStyle: {
          width: 'auto',
        },
        labelStyle: {
          fontSize: 15,
          margin: 0,
          fontWeight: '500',
          padding: 0,
        },
      }}>
      <DashBoardStack.Screen
        name={'Chat'}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })}
        component={ChatStack}
      />
      <DashBoardStack.Screen name={'Profile'} component={ProfileScreen} />
    </DashBoardStack.Navigator>
  );
};

// Manifest of possible screens
const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={stackScreenOptions}>
        <RootStack.Screen
          name={NavigationRoutes.SplashScreen}
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <RootStack.Screen
          name={NavigationRoutes.AuthStack}
          options={{ headerShown: false }}
          component={AuthStack}
        />
        <RootStack.Screen
          name={NavigationRoutes.HomeStack}
          options={{ headerShown: false }}
          component={HomeStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
