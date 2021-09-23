import { createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  chatRequest: ['payload', 'chatRequestSuccess'],
  chatUpdateRequest: ['payload'],
  chatSuccess: ['data'],
  chatFailure: ['error'],
});

export const ChatTypes = Types;
export default Creators;
