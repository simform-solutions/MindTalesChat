import {call, put} from 'redux-saga/effects';
import ChatActions from '../redux/ChatRedux';
import {getError} from '../services/Utils';

function* handleResponse(response, action) {
  const {chatRequestSuccess} = action;
  if (response?.status === 200) {
    yield put(
      ChatActions.chatSuccess({
        ...response.data,
      }),
    );
    yield call(chatRequestSuccess, response?.data?.messages);
  } else {
    const error = yield call(getError, response);
    yield put(ChatActions.chatFailure(error));
  }
}

export function* ChatData(api, action) {
  const response = yield call(api.getChatData, action.payload);
  yield* handleResponse(response, action);
}

function* handleUpdateResponse(response, action) {
  if (response?.status === 200) {
    yield put(
      ChatActions.chatSuccess({
        ...response?.data?.record,
      }),
    );
  } else {
    const error = yield call(getError, response);
    yield put(ChatActions.chatFailure(error));
  }
}

export function* UpdateChatData(api, action) {
  const response = yield call(api.updateChatData, action.payload);
  yield* handleUpdateResponse(response, action);
}
