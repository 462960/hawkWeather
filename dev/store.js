import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { dataReducer } from './reducers/dataReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas';
//import { chipsReducer } from './data/chips';
import { loadState } from './helpers/localStorage';

const persistedState = loadState();

// const defaultState = {
//   persistedState,
//   chipsReducer
// };

const sagaMiddleware = createSagaMiddleware();

//export const store = createStore(rootReducer, defaultState, enhancers);
//export const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));
//export const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));
export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);