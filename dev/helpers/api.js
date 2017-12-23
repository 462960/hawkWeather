import axios from 'axios';

const _baseURL = 'https://api.openweathermap.org/data/2.5/';
const _APIKEY = '&appid=XXXXXXXXXXXXXXXXXXXXXXXXXX';

export const getForecastByName = (variant, city) => axios.get(`${_baseURL}${variant}?q=${city}${_APIKEY}`)
  .then(res => res.data)
  .catch(err => console.log('Error:', err));


export const getForecastByCoords = (lat, lon) => axios.get(`${_baseURL}weather?lat=${lat}&lon=${lon}${_APIKEY}`)
  .then(res => res.data)
  .catch(err => console.log('Error:', err));




