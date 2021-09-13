import {createRef} from 'react';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = createRef();
export const currentScreen = createRef();

export function navigate(...props) {
  navigationRef.current?.navigate(...props);
}

export function reset(...props) {
  navigationRef.current.reset(...props);
}

export function replace(...props) {
  navigationRef.current.replace(...props);
}

export function goBack() {
  navigationRef.current.goBack();
}

export function clearStack(navigation, screenName) {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: screenName}],
  });
  navigation.dispatch(resetAction);
}
