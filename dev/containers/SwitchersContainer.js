import React from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";
import { Switchers } from "Components/Switchers";
import DropDownMenu from "material-ui/DropDownMenu";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export class SwitchersContainer extends React.Component {
  handleTemp = (e, i, temp) => {
    e.preventDefault();
    this.props.switchTemp(temp);
  };

  handlePeriod = (e, i, period) => {
    e.preventDefault();
    this.props.variantData(period);
  };

  render() {
    return (
      <Switchers
        {...this.props}
        handleTemp={this.handleTemp}
        handlePeriod={this.handlePeriod}
      />
    );
  }
}

SwitchersContainer.propTypes = {
  switchTemp: PropTypes.func.isRequired,
  variantData: PropTypes.func.isRequired,
  temp: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
};
