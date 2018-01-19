import { getForecastByName, getForecastByCoords } from "Helpers/api";
import { put, call, all, select, take } from "redux-saga/effects";
import { takeLatest, delay } from "redux-saga";
import { v4 } from "node-uuid";
import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_REQUEST,
  ADD_CHIP,
  LOAD_DATA_ERROR,
  SWITCH_FORECAST_LENGTH
} from "Action/constants";

// Sagas Handlers
function* loadDataSuccessHandler(data) {
  yield put({
    type: LOAD_DATA_SUCCESS,
    data
  });
}

function* errorHandler() {
  yield put({
    type: LOAD_DATA_ERROR,
    failed: true
  });
  yield call(delay, 2000);
  yield put({
    type: LOAD_DATA_ERROR,
    failed: false
  });
}

function* addChipHandler(dataSet) {
  yield put({
    type: ADD_CHIP,
    id: v4(),
    city: dataSet.name,
    lat: dataSet.lat,
    lon: dataSet.lon
  });
}

// Sagas
function* loadDataDetails({ period, city }) {
  const getChips = state => state.chipsReducer;
  const getVariant = state => state.switchReducer;

  try {
    const data = yield call(getForecastByName, period, city);
    const chipSet = yield select(getChips);
    const variant = yield select(getVariant);
    // Check city existence in chips array and adopts to diff API data set
    const chipExists = chipSet.some(
      item => item.city == (variant == "weather" ? data.name : data.city.name)
    );
    const dataSet = variant == "weather" ? data : data.city;
    // Yields effect to the reducer specifying the action type and data details
    yield loadDataSuccessHandler(data);
    // If chip with such a city exists, do nothing
    chipExists ? null : yield addChipHandler(dataSet);
  } catch (err) {
    yield errorHandler();
  }
}

function* lengthDataReload() {
  const getExistingCity = state => state.dataReducer;

  try {
    while (true) {
      const variantDispatch = yield take(SWITCH_FORECAST_LENGTH);
      const cityData = yield select(getExistingCity);
      const dataSet =
        variantDispatch.variant !== "weather" ? cityData : cityData.city;
      const data = yield call(
        getForecastByName,
        variantDispatch.variant,
        dataSet.name
      );
      yield loadDataSuccessHandler(data);
    }
  } catch (err) {
    yield errorHandler();
  }
}

function* getPosition() {
  try {
    const getCurrentPosition = () =>
      new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej)
      );
    // Gets user's current position assigned to const
    const pos = yield call(getCurrentPosition);
    const { latitude, longitude } = pos.coords;
    // Yields the forecast API by user coordinates
    const data = yield call(getForecastByCoords, latitude, longitude);
    // Yields user's local forecast to the reducer
    yield loadDataSuccessHandler(data);
  } catch (err) {
    yield errorHandler();
  }
}

function* watchRequest() {
  yield* takeLatest(LOAD_DATA_REQUEST, loadDataDetails);
}

export function* rootSaga() {
  yield all([getPosition(), lengthDataReload(), watchRequest()]);
}
