import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native';

export const storeData = async (key, data) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(data), dataaaa => {});
  } catch (error) {
    Toast.show({
      text: error,
      position: 'top',
      duration: 3000,
    });
  }
};

export const retrieveData = async (key, call) => {
  try {
    AsyncStorage.getItem(key, (_err, result) => {
      call(JSON.parse(result));
    });
  } catch (error) {
    call(false);
  }
};

export const clearData = async key => {
  try {
    AsyncStorage.removeItem(key, (_err, result) => {});
  } catch (error) {
    Toast.show({
      text: error,
      position: 'top',
      duration: 3000,
    });
  }
};
