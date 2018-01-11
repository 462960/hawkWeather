import React from "react";
import PropTypes from "prop-types";
import { TempWind } from "./TempWind";
import Paper from "material-ui/Paper";
import { getTime } from "Helpers/utils";
import { WeatherIcon } from "./WeatherIcon";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";

export const WeekContent = ({ data, temp }) => {
  const weatherSlice = data.list.map(item => {
    // Changes dark/white unit background according to night/day time
    const dayLight = getTime(item.dt) >= 8 && getTime(item.dt) < 18;

    return (
      <div key={item.dt} className="week-content-item">
        <MuiThemeProvider muiTheme={getMuiTheme(dayLight || darkBaseTheme)}>
          <Paper zDepth={2}>
            <h6>{item.dt_txt}</h6>
            <TempWind info={item} temp={temp} />
            {item.weather.map(x => (
              <div key={x.id} className="item-description">
                <p>{x.description}</p>
                <WeatherIcon info={x} />
              </div>
            ))}
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  });
  
  return (
    <div className="week-content-wrapper">
      <h4>
        {data.city.name}, {data.city.country}
      </h4>
      {weatherSlice}
    </div>
  );
};

WeekContent.propTypes = {
  data: PropTypes.object.isRequired,
  temp: PropTypes.string.isRequired
};
