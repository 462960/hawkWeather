import { getForecast } from '../helpers/api';
import { userPosition } from '../helpers/api';
import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga';
import { LOAD_DATA_SUCCESS, LOAD_DATA_REQUEST } from '../helpers/constants';
//import { getCurrentPosition } from 'redux-saga-location';
//const getCurrentPositon = require('babel-node-modules')([
//   'redux-saga-location' // add an array of module names here
// ])

function* loadDataDetails({payload}) {
  try {
    //const position = yield call(userPosition);
    const data = yield call(getForecast, payload);
    console.log(data);
    // Yields effect to the reducer specifying the action type and data details
    yield put({
      type: LOAD_DATA_SUCCESS,
      data
    });
  } catch (error) {
    throw error;
  }
}

// Watches for LOAD_DATA_REQUEST action type and call loadDataDetails with supplied arguments.
// takeEvery is a Saga helper API built using take and fork.
// take and fork are effect creators. 
// take instructs the middleware to wait for a specified action on the Store
// fork instructs the middleware to perform non blocking operation
export function* watchRequest() {
  yield* takeLatest(LOAD_DATA_REQUEST, loadDataDetails);
}