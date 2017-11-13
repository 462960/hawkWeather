import React from 'react';
import createReactClass from 'create-react-class';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TextField from 'material-ui/TextField';
import {SwitchersContainer} from './SwitchersContainer';
import {CityInputContainer} from './CityInputContainer';
import { ErrorBoundary} from './ErrorBoundary';


export class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<ErrorBoundary>
				<div>
					<SwitchersContainer {...this.props}/>
					<CityInputContainer {...this.props}/>
				</div>
			</ErrorBoundary>
			)
	}
}


