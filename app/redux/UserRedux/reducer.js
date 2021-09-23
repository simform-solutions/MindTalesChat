import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { UserTypes } from './action';

export const INITIAL_STATE = Immutable({
  user: null,
  userProfileData: {
    name: 'testUser',
    email: 'test@gmail.com',
    gender: 'female',
    phoneNo: '9414123456',
    profileImage: '',
  },
  fetchingUserProfile: false,
  errorInProfile: '',
});

/* ------------- Selectors ------------- */
export const UserSelectors = {
  userData: state => state.user.user,
  userProfileData: state => state.user.userProfileData,
  fetchingUserProfile: state => state.user.fetchingUserProfile,
  errorInProfile: state => state.user.errorInProfile,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({ fetching: true });

export const userProfileRequest = state =>
  state.merge({
    fetchingUserProfile: true,
    errorInProfile: null,
  });

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    user: data,
  });
};

export const userProfileDataSave = (state, action) => {
  const { name, email, gender, phoneNo, profileImage } = action;
  const updateProfileData = Object.assign(
    { ...state?.userProfileData },
    {
      name: name,
      email: email,
      gender: gender,
      phoneNo: phoneNo,
      profileImage: profileImage,
    },
  );
  return state.merge({
    userProfileData: updateProfileData,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error });
};

export const userProfileFailure = (state, error) => {
  return state.merge({ fetchingUserProfile: false, errorInProfile: error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const userReducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_REQUEST]: request,
  [UserTypes.USER_SUCCESS]: success,
  [UserTypes.USER_FAILURE]: failure,
  [UserTypes.USER_PROFILE_REQUEST]: userProfileRequest,
  [UserTypes.USER_PROFILE_DATA_SAVE]: userProfileDataSave,
  [UserTypes.USER_PROFILE_FAILURE]: userProfileFailure,
});
