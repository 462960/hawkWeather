
import { getForecastByName, getForecastByCoords } from '../helpers/api';
import { put, call, all } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga';
import { v4 } from 'node-uuid';
import { LOAD_DATA_SUCCESS, LOAD_DATA_REQUEST, LOCATION_REQUEST, LOCATION_SET_POSITION, ADD_CHIP, LOCATION_SET_ERROR } from '../helpers/constants';


function* loadDataDetails({payload}) {
  try {
    const data = yield call(getForecastByName, payload);
    console.log(data.name);
    // Yields effect to the reducer specifying the action type and data details
    yield put({
      type: LOAD_DATA_SUCCESS,
      data
    });
    yield put({
      type: ADD_CHIP,
      id: v4(),
      city: data.name,
      lat: data.coord.lat,
      lon: data.coord.lon
    })
  } catch (error) {
    throw error;
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
// Yields effect to the reducer specifying the action type and data details
// But do I really need a locationReducer??
// yield put({
//   type: LOCATION_SET_POSITION,
//   latitude,
//   longitude
// });
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