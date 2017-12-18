import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { chipsReducer } from './chipsReducer';
import { errorReducer } from './errorReducer';


export const rootReducer = combineReducers({
  chipsReducer,
  dataReducer,
  errorReducer
});