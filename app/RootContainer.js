import { Root } from 'native-base';
import React from 'react';
import { StatusBar, View } from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import { ApplicationStyles } from './theme';

const RootContainer = () => {
  return (
    <Root>
      <View style={[ApplicationStyles.screen.mainContainer]}>
        <StatusBar barStyle='dark-content' />
        <AppNavigation />
      </View>
    </Root>
  );
};

export default RootContainer;
