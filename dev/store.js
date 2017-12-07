import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
//import { chipsReducer } from './reducers/chipsReducer';
import createSagaMiddleware from 'redux-saga';
import { watchRequest } from './sagas/sagas';
import { chipsReducer } from './data/chips';

const defaultState = {
  chipsReducer
};

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(sagaMiddleware)
);



export const store = createStore(rootReducer, defaultState, enhancers);
//export const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
//export const store = createStore(userReducer, enhancers);
sagaMiddleware.run(watchRequest);