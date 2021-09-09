import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  chatRequest: ['payload'],
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
});

/* ------------- Selectors ------------- */
export const ChatSelectors = {
  chatList: state => state.data,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({fetching: true});

// successful api lookup
export const success = (state, action) => {
  const {data} = action;
  console.log('====data==', data);
  return state.merge({
    fetching: false,
    error: false,
    chat: data,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const {error} = action;
  console.log('-----error-----', error);

  return state.merge({fetching: false, error});
};

/* ------------- Hookup Reducers To Types ------------- */

export const chatReducer = createReducer(INITIAL_STATE, {
  [Types.CHAT_REQUEST]: request,
  [Types.CHAT_SUCCESS]: success,
  [Types.CHAT_FAILURE]: failure,
});
