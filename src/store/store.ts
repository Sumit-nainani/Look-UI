import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from '../reducers';

const combinedReducers = combineReducers({
    ...rootReducers,
  });

const store = () => configureStore({reducer: combineReducers});

export default store