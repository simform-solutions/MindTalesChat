import {Root} from 'native-base';
import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationRoutes} from './constants';
import AppNavigation from './navigation/AppNavigation';
import {navigate} from './navigation/services/navigationServices';
import {ApplicationStyles} from './theme';

const RootContainer = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate(NavigationRoutes.AuthStack);
    }, 2000);
  }, []);

  return (
    <Root>
      <View style={[ApplicationStyles.screen.mainContainer]}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </View>
    </Root>
  );
};

export default RootContainer;
