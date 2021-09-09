import {combineReducers} from 'redux';
import {authReducer} from './AuthRedux';
import {chatReducer} from './ChatRedux';
import {userReducer} from './UserRedux';

export default combineReducers({
  auth: authReducer,
  chat: chatReducer,
  user: userReducer,
});
