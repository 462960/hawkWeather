import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const CityInput = ({ submitName, resetRef, cityName }) => (
  <form
    action="post"
    className="city-input"
    onSubmit={submitName}
    ref={resetRef}
  >
    <MuiThemeProvider>
      <TextField floatingLabelText="City" onChange={cityName} name="city" />
    </MuiThemeProvider>
    <input type="submit" hidden />
  </form>
);

CityInput.propTypes = {
  resetRef: PropTypes.func.isRequired,
  submitName: PropTypes.func.isRequired,
  cityName: PropTypes.func.isRequired
};
