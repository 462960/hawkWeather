import { getForecast } from '../helpers/api';
import { put, call, all } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga';
import { LOAD_DATA_SUCCESS, LOAD_DATA_REQUEST, LOCATION_REQUEST, LOCATION_SET_POSITION, LOCATION_SET_ERROR } from '../helpers/constants';


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

function* getPosition() {
  const getCurrentPosition = () => new Promise(
    (res, rej) => navigator.geolocation.getCurrentPosition(res, rej)
  )
  const pos = yield call(getCurrentPosition);
  const {latitude, longitude} = pos.coords;
  // Yields effect to the reducer specifying the action type and data details
  yield put({
    type: LOCATION_SET_POSITION,
    latitude,
    longitude
  });
}

function* watchRequest() {
  yield* takeLatest(LOAD_DATA_REQUEST, loadDataDetails);
}

export function* rootSaga() {
  yield all([
    getPosition(),
    watchRequest()
  ])
}