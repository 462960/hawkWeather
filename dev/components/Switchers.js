import React from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const Switchers = ({ variant, temp, handlePeriod, handleTemp }) => (
  <div className="switchers-wrap">
    <MuiThemeProvider>
      <DropDownMenu value={variant} onChange={handlePeriod}>
        <MenuItem value="weather" primaryText="Today" />
        <MenuItem value="forecast" primaryText="5 days" />
      </DropDownMenu>
    </MuiThemeProvider>
    <br />
    <MuiThemeProvider>
      <DropDownMenu value={temp} onChange={handleTemp}>
        <MenuItem value="C" primaryText="&deg;C" />
        <MenuItem value="F" primaryText="&deg;F" />
      </DropDownMenu>
    </MuiThemeProvider>
  </div>
);

Switchers.propTypes = {
  handlePeriod: PropTypes.func.isRequired,
  handleTemp: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired
};
