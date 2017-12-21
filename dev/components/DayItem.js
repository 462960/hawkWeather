import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { convertToFahrenheit, convertToCelsius, getDate } from '../helpers/utils';

export const DayItem = ({data, temp}) => {

  const weatherCondition = data.weather.map(item => <div key={item.id} className="day-item-description">
    <p>{item.description}</p>
    <img  className="weather-icon" src={`./dev/images/weather-icons/${item.icon}.svg`} alt="weather-icon"/>
    </div>);

  return (<div className="day-item">
      
      <MuiThemeProvider>
                      <Paper zDepth={2}>
                        <h4>{data.name}, {data.sys.country}</h4>
                        <h6>Today: {getDate(data.dt)}</h6>
                        <div>Temp: {temp == "C" ? `${convertToCelsius(data.main.temp)}°C`
      : `${convertToFahrenheit(data.main.temp)}°F`}</div>
                        <div>Max temp: {temp == "C" ? `${convertToCelsius(data.main.temp_max)}°C`
      : `${convertToFahrenheit(data.main.temp_max)}°F`}</div>
                        <div>Min temp: {temp == "C" ? `${convertToCelsius(data.main.temp_min)}°C`
      : `${convertToFahrenheit(data.main.temp_min)}°F`}</div>
                        {weatherCondition}
                      </Paper>
      </MuiThemeProvider>
    </div>)
}

DayItem.propTypes = {
  data: PropTypes.object,
  temp: PropTypes.string
}

