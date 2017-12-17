import React from 'react';
import ReactDOM from 'react-dom';
require('./sass/styles');
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { App } from './components/App';

const store = configureStore();

const wrap = (
<Provider store={store}>
		<App/>
	</Provider>
);

ReactDOM.render(wrap,
  document.querySelector("#app"));


