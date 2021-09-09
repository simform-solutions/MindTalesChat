import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  userRequest: ['payload'],
  userSuccess: ['data'],
  userFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  user: null,
});

/* ------------- Selectors ------------- */
export const UserSelectors = {
  userData: state => state.user.user,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({fetching: true});

// successful api lookup
export const success = (state, action) => {
  const {data} = action;
  return state.merge({
    user: data,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const {error} = action;
  return state.merge({fetching: false, error});
};

/* ------------- Hookup Reducers To Types ------------- */

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
});
