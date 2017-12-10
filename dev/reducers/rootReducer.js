import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { chipsReducer } from './chipsReducer';
//import { locationReducer } from 'redux-saga-location';
//const locationReducer = require('babel-node-modules')([
//   'redux-saga-location' // add an array of module names here
// ])


export const rootReducer = combineReducers({
  chipsReducer,
  dataReducer
 
});