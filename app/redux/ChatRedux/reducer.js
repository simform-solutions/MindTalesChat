import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ChatTypes } from './action';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  chat: null,
  fetching: null,
  error: null,
  sending: null,
});

/* ------------- Selectors ------------- */
// Selectors are included in reducer file only as there isn't any necessary to move it to separate file, selectors will not consist hundreds of variable
// and if there is any reducer where we need 100+ variable we can divide it in different sub modules and reducers. 
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
  [ChatTypes.CHAT_REQUEST]: request,
  [ChatTypes.CHAT_SUCCESS]: success,
  [ChatTypes.CHAT_FAILURE]: failure,
  [ChatTypes.CHAT_UPDATE_REQUEST]: chatUpdateRequest,
});
