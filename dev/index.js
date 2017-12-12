import React from 'react';
import ReactDOM from 'react-dom';
require('./sass/styles');
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './components/App';
import { saveState } from './helpers/localStorage';
import throttle from 'lodash/throttle';

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));


const wrap = (
<Provider store={store}>
		<App/>
	</Provider>
);

ReactDOM.render(wrap,
  document.querySelector("#app"));


