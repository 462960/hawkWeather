import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import { TempWind } from "./TempWind";
import { WeatherIcon } from "./WeatherIcon";
import { getDate, getTime } from "Helpers/utils";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";

export const DayItem = ({ data, temp }) => {
  const weatherCondition = data.weather.map(item => (
    <div key={item.id} className="item-description">
      <p>{item.description}</p>
      <WeatherIcon info={item} />
    </div>
  ));
  // Changes dark/white unit background according to night/day time
  const dayLight = getTime(data.dt) >= 8 && getTime(data.dt) < 18;

  return (
    <div className="day-item">
      <MuiThemeProvider muiTheme={getMuiTheme(dayLight || darkBaseTheme)}>
        <Paper zDepth={2}>
          <h4>
            {data.name}, {data.sys.country}
          </h4>
          <h6>Today: {getDate(data.dt)}</h6>
          <TempWind info={data} temp={temp} />
          {weatherCondition}
        </Paper>
      </MuiThemeProvider>
    </div>
  );
};

DayItem.propTypes = {
  data: PropTypes.object,
  temp: PropTypes.string
};
