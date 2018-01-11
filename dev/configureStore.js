import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas';
import { loadState, saveState } from 'Helpers/localStorage';
import throttle from 'lodash/throttle';

export const configureStore = () => {
  const persistedState = loadState();
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(sagaMiddleware)
  );
  
  sagaMiddleware.run(rootSaga);

  store.subscribe(throttle(() => {
    saveState({
      chipsReducer: store.getState().chipsReducer
    });
  }, 1000));

  return store;
}

