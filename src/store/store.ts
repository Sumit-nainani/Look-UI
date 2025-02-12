import {combineReducers, createStore} from 'redux'
import { rootReducers } from '../reducers';

const combinedReducers = combineReducers({
    ...rootReducers,
  });

const store = () => createStore(combinedReducers);

export default store