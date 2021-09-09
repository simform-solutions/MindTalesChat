import {call, put} from 'redux-saga/effects';
import ChatActions from '../redux/ChatRedux';
import {getError} from '../services/Utils';

function* handleResponse(response) {
  if (response?.status === 200) {
    yield put(
      ChatActions.chatSuccess({
        ...response.data,
      }),
    );
  } else {
    const error = yield call(getError, response);
    yield put(ChatActions.chatFailure(error));
  }
}
export function* ChatData(api, action) {
  const response = yield call(api.getChatData, action.payload);
  yield* handleResponse(response);
}