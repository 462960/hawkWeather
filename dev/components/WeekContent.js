import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { convertToFahrenheit, convertToCelsius, getDate } from '../helpers/utils';


export const WeekContent = ({data, temp}) => {
  const weatherSlice = data.list.map(item => <div key={item.dt} className="week-content-item">
		<MuiThemeProvider >
			<Paper zDepth={2}>
				<h6>{item.dt_txt}</h6>
                        <div>Temp: {temp == "C" ? `${convertToCelsius(item.main.temp)}°C`
      : `${convertToFahrenheit(item.main.temp)}°F`}</div>
                        <div>Max temp: {temp == "C" ? `${convertToCelsius(item.main.temp_max)}°C`
      : `${convertToFahrenheit(item.main.temp_max)}°F`}</div>
                        <div>Min temp: {temp == "C" ? `${convertToCelsius(item.main.temp_min)}°C`
      : `${convertToFahrenheit(item.main.temp_min)}°F`}</div>
      {item.weather.map(x => <div key={x.id} className="item-description">
    <p>{x.description}</p>
    <img  className="weather-icon" src={`https://weather.skepton.ru/images/weather-icons/${x.icon}.svg`} alt="weather-icon"/>
    </div>)}				
			</Paper>
		</MuiThemeProvider>
		</div>)
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

