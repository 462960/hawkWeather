import {getForecast} from '../helpers/api';
import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

 function* loadUserDetails({ payload }) {
  try {
    const user = yield call(getForecast, payload);
    // Yields effect to the reducer specifying the action type and user details
    yield put({type: 'LOAD_USER_SUCCESS', user}); 
  } catch (error) {
    throw error;
  }
}

// Watches for LOAD_USER_REQUEST action type and call loadUserDetails with supplied arguments.
// takeEvery is a Saga helper API built using take and fork.
// take and fork are effect creators. 
// take instructs the middleware to wait for a specified action on the Store
// fork instructs the middleware to perform non blocking operation
export function* watchRequest() {
  yield* takeLatest('LOAD_USER_REQUEST', loadUserDetails);
}