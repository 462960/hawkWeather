import React from 'react';
import { CityInput } from '../components/CityInput';


export class CityInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cityName = this.cityName.bind(this);
    this.submitName = this.submitName.bind(this);

  }

  cityName(e) {
    this.setState({
      city: e.target.value
    })
  }

  submitName(e) {
    e.preventDefault();
    this.props.getData(this.props.variant, this.state.city);
    console.log('I am city submit', this.state.city);
    this.resetForm.reset();
  }

  render() {
    return <CityInput
      cityName={this.cityName}
      resetRef={el => this.resetForm = el}
      submitName={this.submitName}
      />

  }
}

