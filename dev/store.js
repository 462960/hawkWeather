import {createStore, compose, applyMiddleware} from 'redux';
import { rootReducer } from './reducers/rootReducer';

const defaultState = {
};

const enhancers = compose(
window.devToolsExtension && window.devToolsExtension()
	);

export const store = createStore(rootReducer, defaultState, enhancers);