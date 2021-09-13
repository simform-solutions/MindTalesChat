import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, data) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(data), dataaaa => {
    });
  } catch (error) {
  }
};

export const retrieveData = async (key, call) => {
  try {
    AsyncStorage.getItem(key, (err, result) => {
      call(JSON.parse(result));
    });
  } catch (error) {
    call(false);
  }
};

export const clearData = async key => {
  try {
    AsyncStorage.removeItem(key, (err, result) => {
    });
  } catch (error) {
  }
};
