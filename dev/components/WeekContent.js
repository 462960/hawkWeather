import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import Paper from 'material-ui/Paper';
import { getTime } from '../helpers/utils';
import { TempWind } from './TempWind';


export const WeekContent = ({data, temp}) => {

    const weatherSlice = data.list.map(item => {
    const night = getTime(item.dt) > 8 && getTime(item.dt) < 18;
    
    return (
      <div key={item.dt} className="week-content-item">
            <MuiThemeProvider muiTheme={getMuiTheme(night ? 'null' : darkBaseTheme)}>
              <Paper zDepth={2}>
                <h6>{item.dt_txt}</h6>
                <TempWind info={item} temp={temp}/>
                {item.weather.map(x => <div key={x.id} className="item-description">
                    <p>{x.description}</p>
                    <img  className="weather-icon" src={`https://weather.skepton.ru/images/weather-icons/${x.icon}.svg`} alt="weather-icon"/>
                  </div>)}        
              </Paper>
            </MuiThemeProvider>
          </div>
    )
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

