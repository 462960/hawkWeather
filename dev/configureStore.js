import throttle from "lodash/throttle";
import { rootSaga } from "./sagas/sagas";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { loadState, saveState } from "Helpers/localStorage";

export const configureStore = () => {
  const persistedState = loadState();
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  store.subscribe(
    throttle(() => {
      saveState({
        chipsReducer: store.getState().chipsReducer
      });
    }, 1000)
  );

  return store;
};
