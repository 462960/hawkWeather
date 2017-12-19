import axios from 'axios';

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY = '&appid=76c65d2a6d6a1d398c2ecea2ba15d67e';

export const getForecastByName = (variant, city) =>
// By city name
//axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
axios.get(`${_baseURL}${variant}?q=${city}${_APIKEY}`)
  .then(res => res.data)
  .catch(err => console.log('Error:', err));


export const getForecastByCoords = (lat, lon) =>
// By coords
//axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
axios.get(`${_baseURL}weather?lat=${lat}&lon=${lon}${_APIKEY}`)
  .then(res => res.data)
  .catch(err => console.log('Error:', err));



  // Today
  //http://api.openweathermap.org/data/2.5/weather?q=London&appid=76c65d2a6d6a1d398c2ecea2ba15d67e
  // 5 days
  //http://api.openweathermap.org/data/2.5/forecast?q=London&appid=76c65d2a6d6a1d398c2ecea2ba15d67e
