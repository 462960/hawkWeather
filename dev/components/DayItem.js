import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { convertToFahrenheit, convertToCelsius, getDate, getTime } from '../helpers/utils';

export const DayItem = ({data, temp}) => {

  const weatherCondition = data.weather.map(item => <div key={item.id} className="item-description">
    <p>{item.description}</p>
    <img  className="weather-icon" src={`/images/weather-icons/${item.icon}.svg`} alt="weather-icon"/>
    </div>);
  const night = getTime(data.dt) > 8 && getTime(data.dt) < 18;
  const arrowColor = night ? "black" : "white";
  const windDirection = data.wind.deg;
  const divStyle = {
    background: `url(/images/arrow-${arrowColor}.png)`,
    transform: `rotate(${windDirection}deg)`,
    borderRadius: "50%",
    marginLeft: 20,
    height: 50,
    width: 50
  }

  return (<div className="day-item">
      
      <MuiThemeProvider>
                      <Paper zDepth={2}>
                        <h4>{data.name}, {data.sys.country}</h4>
                        <h6>Today: {getDate(data.dt)}</h6>
                        <div className="temp-wind-wrapper">
                          <div className="temp-holder">
                            <div>
                              <div>Temp: </div><span>{temp == "C" ? `${convertToCelsius(data.main.temp)}°C`
                                    : `${convertToFahrenheit(data.main.temp)}°F`}</span>
                            </div>
                            <div>
                              <div>Max temp: </div><span>{temp == "C" ? `${convertToCelsius(data.main.temp_max)}°C`
                                    : `${convertToFahrenheit(data.main.temp_max)}°F`}</span>
                            </div>
                            <div>
                              <div>Min temp: </div><span>{temp == "C" ? `${convertToCelsius(data.main.temp_min)}°C`
                                    : `${convertToFahrenheit(data.main.temp_min)}°F`}</span>
                            </div>
                          </div>
                          <div className="wind-holder">
                           <div>Wind: {data.wind.speed}m</div>
                              <div style={divStyle}>
                                                       </div>
                           </div>
                        </div>
                        {weatherCondition}
                      </Paper>
      </MuiThemeProvider>
    </div>)
}

DayItem.propTypes = {
  data: PropTypes.object,
  temp: PropTypes.string
}

