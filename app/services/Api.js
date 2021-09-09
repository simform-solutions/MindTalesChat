import Secrets from 'react-native-config';
import {apiConfig, chatApiConfig} from './Utils';

const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);
const chatApi = chatApiConfig(
  'https://api.jsonbin.io/b/613a1aa79548541c29aed6c0',
);

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

const chat = () => {
  const getChatData = () => chatApi.get('/latest');
  return {
    getChatData,
  };
};

export default {
  auth,
  chat,
};
