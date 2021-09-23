import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api';
import { ChatTypes } from '../redux/ChatRedux/action';
import { ChatData, UpdateChatData } from './Chat';
import { UserChatList } from './User';
import { UserTypes } from '../redux/UserRedux/action';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const apiChat = API.chat();

export default function* rootSaga() {
  yield all([takeLatest(ChatTypes.CHAT_REQUEST, ChatData, apiChat)]);
  yield all([
    takeLatest(ChatTypes.CHAT_UPDATE_REQUEST, UpdateChatData, apiChat),
  ]);
  yield all([takeLatest(UserTypes.USER_REQUEST, UserChatList)]);
}
