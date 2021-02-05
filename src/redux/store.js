import { combineReducers, createStore } from 'redux';
import userReducer from './user';
import pageReducer from './page';

export default createStore(combineReducers({
  users: userReducer,
  pageTitle: pageReducer,
}));
