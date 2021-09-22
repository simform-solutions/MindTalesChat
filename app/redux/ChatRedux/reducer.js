import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  chatRequest: ['payload', 'chatRequestSuccess'],
  chatUpdateRequest: ['payload'],
  chatSuccess: ['data'],
  chatFailure: ['error'],
});

export const ChatTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  chat: null,
  fetching: null,
  error: null,
  sending: null,
});

/* ------------- Selectors ------------- */
export const ChatSelectors = {
  chatList: state => state.chat,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({ fetching: true });

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    chat: data,
    sending: false,
  });
};

// successful api lookup
export const chatUpdateRequest = state => state.merge({ sending: true });

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, sending: false });
};

/* ------------- Hookup Reducers To Types ------------- */

export const chatReducer = createReducer(INITIAL_STATE, {
  [Types.CHAT_REQUEST]: request,
  [Types.CHAT_SUCCESS]: success,
  [Types.CHAT_FAILURE]: failure,
  [Types.CHAT_UPDATE_REQUEST]: chatUpdateRequest,
});
