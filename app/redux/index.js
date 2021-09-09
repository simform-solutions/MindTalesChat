import {combineReducers} from 'redux';
import {authReducer} from './AuthRedux';
import {chatReducer} from './ChatRedux';

export default combineReducers({
  auth: authReducer,
  chat: chatReducer,
});
