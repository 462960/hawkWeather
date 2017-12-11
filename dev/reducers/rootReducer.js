import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { chipsReducer } from './chipsReducer';
import { locationReducer } from './locationReducer';


export const rootReducer = combineReducers({
  chipsReducer,
  dataReducer,
  locationReducer 
});