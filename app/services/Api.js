import Secrets from 'react-native-config';
import {apiConfig} from './Utils';

const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const auth = () => {
  const loginUser = credentials => api.post('/api/v1/user/login', credentials);
  const registerUser = user => api.post('/api/v1/user/signup', user);
  const forgotPassword = email =>
    api.post('/api/v1/user/forgot-password', {email: email});

  return {
    loginUser,
    registerUser,
    forgotPassword,
  };
};

export default {
  auth,
};
