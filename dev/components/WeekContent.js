import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import Paper from 'material-ui/Paper';
import { convertToFahrenheit, convertToCelsius, getDate, getTime } from '../helpers/utils';


export const WeekContent = ({data, temp}) => {
  const weatherSlice = data.list.map(item => {
    const night = getTime(item.dt) > 8 && getTime(item.dt) < 18;
    const arrowColor = night ? "black" : "white";
    const windDirection = item.wind.deg;
    const divStyle = {
      background: `url(/images/arrow-${arrowColor}.png)`,
      transform: `rotate(${windDirection}deg)`,
      borderRadius: "50%",
      marginLeft: 20,
      height: 50,
      width: 50
    }
    return (<div key={item.dt} className="week-content-item">
    <MuiThemeProvider muiTheme={getMuiTheme(night ? 'null' : darkBaseTheme)}>
      <Paper zDepth={2}>
        <h6>{item.dt_txt}</h6>
                        <div className="temp-wind-wrapper">
                          
                            <div className="temp-holder">
                              <div>
                                <div>Temp: </div><span>{temp == "C" ? `${convertToCelsius(item.main.temp)}°C`
        : `${convertToFahrenheit(item.main.temp)}°F`}</span>
                              </div>
                              <div>
                                <div>Max temp: </div><span>{temp == "C" ? `${convertToCelsius(item.main.temp_max)}°C`
        : `${convertToFahrenheit(item.main.temp_max)}°F`}</span>
                              </div>
                              <div>
                                <div>Min temp:</div> <span>{temp == "C" ? `${convertToCelsius(item.main.temp_min)}°C`
        : `${convertToFahrenheit(item.main.temp_min)}°F`}</span>
                              </div>
                            </div>
                           <div className="wind-holder">
                           <div>Wind: {item.wind.speed}m</div>
                              <div style={divStyle}>
                                                       </div>
                           </div>

                        </div>
      {item.weather.map(x => <div key={x.id} className="item-description">
    <p>{x.description}</p>
    <img  className="weather-icon" src={`/images/weather-icons/${x.icon}.svg`} alt="weather-icon"/>
    </div>)}        
      </Paper>
    </MuiThemeProvider>
    </div>)
  })
  return (
    <div className="week-content-wrapper">
    <h4>{data.city.name}, {data.city.country}</h4>
    {weatherSlice}
    </div>
  )
}

WeekContent.propTypes = {
  data: PropTypes.object.isRequired,
  temp: PropTypes.string.isRequired
}

