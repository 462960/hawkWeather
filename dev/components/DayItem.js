import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';



export const DayItem = ({data}) => {
 /* const weatherCondition = data.weather.map(item => <div key={item.id}>
  	{item.description}
  	<img  className="weather-icon" src={`./dev/images/weather-icons/${item.icon}.svg`} alt="weather-icon"/>
  	</div>);*/
  return (<MuiThemeProvider>
								<Paper zDepth={2}>
								{data.name}
								</Paper>
							</MuiThemeProvider>)
}

/*export const DayItem = ({data}) => {
  const weatherCondition = data.weather.map(item => <div key={item.id}>
  	{item.description}
  	<img  className="weather-icon" src={`./dev/images/weather-icons/${item.icon}.svg`} alt="weather-icon"/>
  	</div>);
  return (<MuiThemeProvider>
								<Paper zDepth={2}>
								{weatherCondition}
								</Paper>
							</MuiThemeProvider>)
}*/
