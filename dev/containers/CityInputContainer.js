import React from "react";
import PropTypes from "prop-types";
import { CityInput } from "Components/CityInput";

export class CityInputContainer extends React.Component {
  componentDidMount() {
    this.focusForm.focus();
  }

  cityName = e => {
    this.setState({
      city: e.target.value
    });
  };

  submitName = e => {
    e.preventDefault();
    this.props.getData(this.props.variant, this.state.city);
    this.resetForm.reset();
  };

  render() {
    return (
      <div className="city-input-wrapper">
        <CityInput
          cityName={this.cityName}
          resetRef={el => (this.resetForm = el)}
          focusRef={el => (this.focusForm = el)}
          submitName={this.submitName}
        />
      </div>
    );
  }
}

CityInputContainer.propTypes = {
  variant: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired
};
