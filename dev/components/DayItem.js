import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { getDate } from '../helpers/utils';
import { TempWind } from './TempWind';
import { WeatherIcon } from './WeatherIcon';

export const DayItem = ({data, temp}) => {

  const weatherCondition = data.weather.map(item => <div key={item.id} className="item-description">
    <p>{item.description}</p>
    <WeatherIcon info={item}/>
    </div>);

  return (
    <div className="day-item">
      <MuiThemeProvider>
        <Paper zDepth={2}>
          <h4>{data.name}, {data.sys.country}</h4>
          <h6>Today: {getDate(data.dt)}</h6>
          <TempWind info={data} temp={temp}/>
          {weatherCondition}
        </Paper>
      </MuiThemeProvider>
    </div>)
}

DayItem.propTypes = {
  data: PropTypes.object,
  temp: PropTypes.string
}

