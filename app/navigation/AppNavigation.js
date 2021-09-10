import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {NavigationRoutes} from '../constants';
import LoginScreen from '../modules/Auth/LoginScreen';
import HomeScreen from '../modules/Home/HomeScreen';
import SplashScreen from '../modules/Splash/SplashScreen';
import {Colors, Icons} from '../theme';
import {navigationRef} from './services/navigationServices';
import styles from './styles/AppNavigationStyles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../modules/Profile/ProfileScreen';
import ViewProfileScreen from '../modules/Profile/ViewProfileScreen';

import ChatScreen from '../modules/Chat/ChatScreen';
import ContactScreen from '../modules/Contact/ContactScreen';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        options={{headerShown: false}}
        component={LoginScreen}
      />
    </RootStack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name={NavigationRoutes.ViewProfileScreen}
        options={{headerShown: false}}
        component={ViewProfileScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.ProfileScreen}
        options={{headerShown: false}}
        component={ProfileScreen}
      />
    </RootStack.Navigator>
  );
};
const ChatStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name={NavigationRoutes.HomeScreen}
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.ChatScreen}
        options={{headerShown: false}}
        component={ChatScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.ContactScreen}
        options={{headerShown: false}}
        component={ContactScreen}
      />
    </RootStack.Navigator>
  );
};
const getTabBarVisibility = route => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (
    routeName === NavigationRoutes.ChatScreen ||
    routeName === NavigationRoutes.ContactScreen ||
    routeName === NavigationRoutes.ProfileScreen
  ) {
    return false;
  }

  return true;
};
const HomeStack = () => {
  return (
    <DashBoardStack.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.secondary,
        upperCaseLabel: true,
        tabStyle: {
          width: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelStyle: {
          fontSize: 15,
          margin: 0,
          fontWeight: '500',
          padding: 0,
        },
        style: {
          shadowOffset: {width: 0, height: 2},
          shadowColor: Colors.tabBarShadow,
          shadowOpacity: 0.2,
          shadowRadius: 7,
          elevation: 7,
        },
      }}>
      <DashBoardStack.Screen
        name={'Chat'}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons name="chat" color={color} size={size} />
          // ),
        })}
        component={ChatStack}
      />
      <DashBoardStack.Screen
        name={'Profile'}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons
          //     name="account-circle"
          //     color={color}
          //     size={size}
          //   />
          // ),
        })}
        component={ProfileStack}
      />
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
