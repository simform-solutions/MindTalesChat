import { combineReducers } from 'redux';
import { chatReducer } from './ChatRedux/reducer';
import { userReducer } from './UserRedux/reducer';

export default combineReducers({
  chat: chatReducer,
  user: userReducer,
});
