import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { convertToFahrenheit, convertToCelsius, getDate } from '../helpers/utils';

export class DayItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data, temp} = this.props;
    const weatherCondition = data.weather.map(item => <div key={item.id}>
    {item.description}
    <img  className="weather-icon" src={`./dev/images/weather-icons/${item.icon}.svg`} alt="weather-icon"/>
    
    </div>);
    return (<div>
      
      <MuiThemeProvider>
                      <Paper zDepth={2}>
                        <div>Today: {data.name}</div>
                        <div>{getDate(data.dt)}</div>
                        <div>Temp: {temp == "C" ? `${convertToCelsius(data.main.temp)}°C`
        : `${convertToFahrenheit(data.main.temp)}°F`}</div>
                        {weatherCondition}
                      </Paper>
      </MuiThemeProvider>
    </div>)
  }
}


// export const DayItem = ({data}) => {
//   const weatherCondition = data.weather.map(item => <div key={item.id}>
//    {item.description}
//    <img  className="weather-icon" src={`./dev/images/weather-icons/${item.icon}.svg`} alt="weather-icon"/>
//    </div>);
//   return (<div>
//     <MuiThemeProvider>
//                     <Paper zDepth={2}>
//                     {weatherCondition}
//                     </Paper>
//                   </MuiThemeProvider>
//   </div>)
// }
