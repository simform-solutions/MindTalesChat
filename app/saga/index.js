import {all, takeLatest} from 'redux-saga/effects';
import API from '../services/Api';
import {AuthTypes} from '../redux/AuthRedux';
import {loginUser} from './Auth';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const apiAuth = API.auth();

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.AUTH_REQUEST, loginUser, apiAuth)]);
}
