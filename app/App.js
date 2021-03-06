import React from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactronConfig';
import reduxStore from './redux/Store';
import RootContainer from './RootContainer';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={reduxStore.store}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
};

// allow reactotron overlay for fast design in dev mode
export default __DEV__ ? console.tron.overlay(App) : App;
