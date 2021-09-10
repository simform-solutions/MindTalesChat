import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  userRequest: ['payload'],
  userSuccess: ['data'],
  userFailure: ['error'],
  userProfileRequest: [''],
  userProfileDataSave: ['data'],
  userProfileFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  user: null,
  userProfileData: {
    name: 'testUser',
    email: 'test@gmail.com',
    gender: 'female',
    phoneNumber: '+1 (854)214 5454',
  },
  userProfileDataSave: '',
  fetchingUserProfile: false,
  errorInProfile: '',
});

/* ------------- Selectors ------------- */
export const UserSelectors = {
  userData: state => state.user.user,
  userProfileDataSave: state => state.user.userProfileDataSave,
  fetchingUserProfile: state => state.user.fetchingUserProfile,
  errorInProfile: state => state.user.errorInProfile,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({fetching: true});

export const userProfileRequest = state =>
  state.merge({
    fetchingUserProfile: true,
    errorInProfile: null,
  });

// successful api lookup
export const success = (state, action) => {
  const {data} = action;
  return state.merge({
    user: data,
  });
};

export const userProfileDataSave = (state, action) => {
  const {data} = action;
  return state.merge({
    userProfileDataSave: data,
    fetchingUserProfile: false,
    errorInProfile: false,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const {error} = action;
  return state.merge({fetching: false, error});
};

export const userProfileFailure = (state, action, error) => {
  // const {error} = action;
  return state.merge({fetchingUserProfile: false, errorInProfile: error});
};

/* ------------- Hookup Reducers To Types ------------- */

export const userReducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,

  [Types.USER_PROFILE_REQUEST]: userProfileRequest,
  [Types.USER_PROFILE_DATA_SAVE]: userProfileDataSave,
  [Types.USER_PROFILE_FAILURE]: userProfileFailure,
});
