import {call, put} from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import {getError} from '../services/Utils';

function* handleResponse(response) {
  if (response?.code === 200) {
    yield put(
      AuthActions.authSuccess({
        ...response.data.currentUserDetails,
        token: response.token,
      }),
    );
  } else {
    const error = yield call(getError, response);
    yield put(AuthActions.authFailure(error));
  }
}

export function* loginUser(api, action) {
  const response = yield call(api.loginUser, action.payload);
  yield* handleResponse(response.data);
}
