import React from 'react';
import createReactClass from 'create-react-class';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {TempSwitch} from './TempSwitch';
import {PeriodSwitch} from './PeriodSwitch';
//import TextField from 'material-ui/TextField';
import Switchers from './Switchers'


export const Home = createReactClass({
	componentDidMount() {
    this.props.getUserDetails('462960');
    console.log(`I'm mounted!!`)
  },
	render(){
		return (
			<MuiThemeProvider>
					<Switchers {...this.props}/>
			</MuiThemeProvider>
			)
	}
})


// export const Home = (props) =>
	
// 			<div>
// 				<MuiThemeProvider>
// 					<Switchers {...props}/>
// 				</MuiThemeProvider>
// 			</div>
