import { put } from 'redux-saga/effects';
import UserActions from '../redux/UserRedux';
import UserData from '../config/ChatUser.json';

export function* UserChatList() {
  try {
    yield put(
      UserActions.userSuccess({
        ...UserData.data,
      }),
    );
  } catch (error) {
    yield put(UserActions.userFailure(error));
  }
}
