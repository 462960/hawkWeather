import { getForecast } from '../helpers/api';
import { put, call, all } from 'redux-saga/effects'
import { takeLatest, delay } from 'redux-saga';
import { LOAD_DATA_SUCCESS, LOAD_DATA_REQUEST } from '../helpers/constants';

function* loadDataDetails({payload}) {
  try {
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

export function* helloSaga() {
  yield delay(1500)
  console.log('Hello, Saga!');
}

// Watches for LOAD_DATA_REQUEST action type and call loadDataDetails with supplied arguments.
// takeEvery is a Saga helper API built using take and fork.
// take and fork are effect creators. 
// take instructs the middleware to wait for a specified action on the Store
// fork instructs the middleware to perform non blocking operation
// export function* watchRequest() {
//   yield* takeLatest(LOAD_DATA_REQUEST, loadDataDetails);
// }

export function* watchRequest() {
  yield* takeLatest(LOAD_DATA_REQUEST, loadDataDetails);
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    watchRequest()
  ])
}