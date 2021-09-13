import {chatApiConfig} from './Utils';

const chatApi = chatApiConfig('https://api.jsonbin.io/v3/b/');

const chat = () => {
  const getChatData = ({_id}) => chatApi.get(`${_id}/latest`);
  const updateChatData = ({_id, data}) =>
    chatApi.put(`${_id}`, {messages: data});
  return {
    getChatData,
    updateChatData,
  };
};

export default {
  chat,
};
