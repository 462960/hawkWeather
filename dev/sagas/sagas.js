
import { getForecastByName, getForecastByCoords } from '../helpers/api';
import { put, call, all, select } from 'redux-saga/effects'
import { takeLatest, delay } from 'redux-saga';
import { v4 } from 'node-uuid';
import { LOAD_DATA_SUCCESS, LOAD_DATA_REQUEST, ADD_CHIP, LOAD_DATA_ERROR } from '../helpers/constants';

function* loadDataDetails({payload}) {
  const getChips = state => state.chipsReducer;
  try {
    const data = yield call(getForecastByName, payload);
    // Select is the way to access store from saga
    const chipSet = yield select(getChips);
    // Check city existence in the chips array
    const exists = chipSet.some(item => item.city == data.name);
    // Yields effect to the reducer specifying the action type and data details
    yield put({
      type: LOAD_DATA_SUCCESS,
      data
    });
    // If chip with such a city exists do nothing
    exists ? null
      : yield put({
        type: ADD_CHIP,
        id: v4(),
        city: data.name,
        lat: data.coord.lat,
        lon: data.coord.lon
      })
  } catch (error) {
    const failed = error ? true : false
    yield put({
      type: LOAD_DATA_ERROR,
      failed
    });
    yield call(delay, 2000)
    yield put({
      type: LOAD_DATA_ERROR,
      failed: false
    });
  }
}

function* getPosition() {
  const getCurrentPosition = () => new Promise(
    (res, rej) => navigator.geolocation.getCurrentPosition(res, rej)
  )
  // Gets user's current position assigned to const
  const pos = yield call(getCurrentPosition);
  const {latitude, longitude} = pos.coords;
  // Yields the forecast API by user coordinates
  const data = yield call(getForecastByCoords, latitude, longitude)
  // Yields user's local forecast to the reducer
  yield put({
    type: LOAD_DATA_SUCCESS,
    data
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