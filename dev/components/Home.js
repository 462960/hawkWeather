import React from 'react';
import createReactClass from 'create-react-class';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import TextField from 'material-ui/TextField';
import {SwitchersContainer} from './SwitchersContainer'
import { ErrorBoundary} from './ErrorBoundary';


export const Home = createReactClass({
	componentDidMount() {
    this.props.getUserDetails('Kosiv');
    console.log(`I'm mounted!!`)
  },
  handleInput(e){
  	e.preventDefault();
  	const city = this.city.value;
  	this.props.getUserDetails(city);
  	//this.handleInput.reset();

  },
	render(){
		return (
			<ErrorBoundary>
					<SwitchersContainer {...this.props}/>
				    {/*<PeriodSwitch {...this.props}/>*/}
			{/*	<form ref={x => this.inputForm = x} onSubmit={this.handleInput}>
				<input type="text" ref={x => this.city = x}/>
				<input type="submit" hidden/>
				</form>
				<p>{this.props.user.name}</p>*/}
			</ErrorBoundary>
			)
	}
})


