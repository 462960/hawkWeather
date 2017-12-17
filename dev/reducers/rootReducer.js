import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { chipsReducer } from './chipsReducer';


export const rootReducer = combineReducers({
  chipsReducer,
  dataReducer
});