import React from 'react';
import {CityInput} from './CityInput';


export class CityInputContainer extends React.Component{
	constructor(props){
		super(props);
		this.cityName = this.cityName.bind(this);
		this.submitName = this.submitName.bind(this);
		//this.props.getUserDetails = this.props.getUserDetais;
	}

	// componentDidMount(){
	// 	function initialize(){
 //  				const input = document.getElementById('box');
 //  				const autocomplete = new google.maps.places.Autocomplete(input);
	// 			}
	// 	google.maps.event.addDomListener(window, 'load', initialize)
	// }

	cityName(e,name){
		this.setState({
			name
		})
		console.log(name);
		//this.resetRef.reset();
	}

	submitName(e){
		e.preventDefault();
		this.props.getUserDetails(this.state.name)
		console.log('I amm submit');
		//this.resetForm.reset();
	}

	render(){
			return <CityInput {...this.props} 
			cityName={this.cityName} 
			resetRef={el => this.resetForm = el}
			submitName={this.submitName}
			/>
		}
}

