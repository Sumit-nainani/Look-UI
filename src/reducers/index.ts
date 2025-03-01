import { userInfoReducer } from './user';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducers = combineReducers({
  userInfoReducer: userInfoReducer,
});
