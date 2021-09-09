import {all, takeLatest} from 'redux-saga/effects';
import API from '../services/Api';
import {AuthTypes} from '../redux/AuthRedux';
import {loginUser} from './Auth';
import {ChatTypes} from '../redux/ChatRedux';
import {ChatData} from './Chat';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const apiAuth = API.auth();
const apiChat = API.chat();

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.AUTH_REQUEST, loginUser, apiAuth)]);
  yield all([takeLatest(ChatTypes.CHAT_REQUEST, ChatData, apiChat)]);
}
