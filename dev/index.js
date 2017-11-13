import React from 'react';
import ReactDOM from 'react-dom';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//require('./sass/styles');
import {Provider} from 'react-redux';
import { store } from './store';
import { App } from './components/App';
//import { TestOnchange } from '../sandbox/components/TestOnchange';

//injectTapEventPlugin();

const wrap = (
	<Provider store={store}>
		<App/>
	</Provider>
	);

ReactDOM.render(wrap,
document.querySelector("#app"));


