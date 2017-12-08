import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { dataReducer } from './reducers/dataReducer';
import createSagaMiddleware from 'redux-saga';
import { watchRequest } from './sagas/sagas';
import { chipsReducer } from './data/chips';

const defaultState = {
  chipsReducer
};

const sagaMiddleware = createSagaMiddleware();

// const enhancers = compose(
//   window.devToolsExtension && window.devToolsExtension(),
//   applyMiddleware(sagaMiddleware)
// );

//export const store = createStore(rootReducer, defaultState, enhancers);
//export const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));
export const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchRequest);