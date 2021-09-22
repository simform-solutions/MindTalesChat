import { combineReducers } from 'redux';
import { chatReducer } from './ChatRedux/reducer';
import { userReducer } from './UserRedux';

export default combineReducers({
  chat: chatReducer,
  user: userReducer,
});
