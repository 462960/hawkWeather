import React from 'react';
import PropTypes from 'prop-types';
import { CityInput } from '../components/CityInput';


export class CityInputContainer extends React.Component {

  cityName = e => {
    this.setState({
      city: e.target.value
    })
  }

  submitName = e => {
    e.preventDefault();
    this.props.getData(this.props.variant, this.state.city);
    this.resetForm.reset();
  }

  render() {
    return <div className="city-input-wrapper">
        <CityInput
      cityName={this.cityName}
      resetRef={el => this.resetForm = el}
      submitName={this.submitName}
      />
          </div>

  }
}

CityInputContainer.propTypes = {
  data: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired
}

