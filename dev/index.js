import React from 'react';
import ReactDOM from 'react-dom';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//require('./sass/styles');
import {Provider} from 'react-redux';
import { store } from './store';
import { App } from './components/App';

//injectTapEventPlugin();

const wrap = (
	<Provider store={store}>
	<MuiThemeProvider>
		<App/>
	</MuiThemeProvider>
	</Provider>
	);


ReactDOM.render(wrap,
document.querySelector("#app"));

