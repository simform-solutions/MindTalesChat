import { createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  userRequest: ['payload'],
  userSuccess: ['data'],
  userFailure: ['error'],
  userProfileRequest: [''],
  userProfileDataSave: ['name', 'email', 'gender', 'phoneNo', 'profileImage'],
  userProfileFailure: ['error'],
});

export const UserTypes = Types;
const UserActions = Creators;
export default UserActions;
