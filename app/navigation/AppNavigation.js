import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { NavigationRoutes } from '../constants';
import LoginScreen from '../modules/Auth/LoginScreen';
import ChatScreen from '../modules/Chat/ChatScreen';
import HomeScreen from '../modules/Home/HomeScreen';
import ProfileScreen from '../modules/Profile/ProfileScreen';
import ViewProfileScreen from '../modules/Profile/ViewProfileScreen';
import SplashScreen from '../modules/Splash/SplashScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors, Icons } from '../theme';
import styles from './styles/AppNavigationStyles';
import colors from '../theme/Colors';

const RootStack = createStackNavigator();
// const DashBoardStack = createBottomTabNavigator();
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
    </RootStack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        name={NavigationRoutes.ViewProfileScreen}
        options={{ headerShown: false }}
        component={ViewProfileScreen}
      />
      <RootStack.Screen
        name={NavigationRoutes.ProfileScreen}
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
    </RootStack.Navigator>
  );
};
function CustomDrawerContent() {
  return <HomeScreen />;
}
const ChatStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={NavigationRoutes.ChatScreen}
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.lightblue,
          width: 240,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={NavigationRoutes.ChatScreen}
        options={{ headerShown: false }}
        component={ChatScreen}
        initialParams={{
          user: {
            _id: 2,
            avatar: 'https://i.pravatar.cc/150?img=4y',
            bin_id: '613a1aa79548541c29aed6c0',
            name: 'Michael',
            username: '@michael',
          },
        }}
      />
      <Drawer.Screen
        name={NavigationRoutes.ProfileStack}
        options={{ headerShown: false }}
        component={ProfileStack}
      />
    </Drawer.Navigator>
  );
};

// Manifest of possible screens
const AppNavigation = () => {
  return (
    <NavigationContainer>
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
          name={NavigationRoutes.ChatStack}
          options={{ headerShown: false }}
          component={ChatStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
