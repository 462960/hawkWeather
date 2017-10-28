import {createStore, compose, applyMiddleware} from 'redux';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';

const defaultState = {
};

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
window.devToolsExtension && window.devToolsExtension(),
applyMiddleware(sagaMiddleware)
	);

export const store = createStore(rootReducer, defaultState, enhancers);