import axios from 'axios';

const _baseURL = 'http://api.openweathermap.org/data/2.5/weather?lat=';
const _APIKEY = '&appid=76c65d2a6d6a1d398c2ecea2ba15d67e';




export const getForecast = (city) =>
//export const getForecast = (lat, lon) =>
// By city name
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
  //axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
  //axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
  // Dnipro
  //axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=48.452192499999995&lon=35.0675542&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
  // By coords
  //axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
  //axios.get(_baseURL + coords + _APIKEY)
  .then(res => res.data)
  .catch(err => console.log('Error:', err));



// export function userPosition(){
//   let location;
//   navigator.geolocation.getCurrentPosition(function(loc){
//     return location = loc;
//   })
// }


  // function prepRouteParams(queryStringData){
  // return Object.keys(queryStringData)
  //        .map(function(key){
  //          return key + '=' + encodeURIComponent(queryStringData[key]);
  //        }).join('&') 
  // }

  // function prepUrl(type, queryStringData){
  //  return _baseURL + type + '?' + prepRouteParams(queryStringData);
  // }

  // function getQueryStringData(city){
  //  return {
  //    q: city,
  //    type: 'accurate',
  //    APPID: _APIKEY,
  //    cnt: 5
  //  }
  // }

  // export function getForecast(city){
  //  let queryStringData = getQueryStringData(city);
  //  let url = prepUrl('forecast/daily', queryStringData);

  //    return axios.get(url)
  //    .then(function(forecastData){
  //       return forecastData.data
  //    })
  // }

  // export function getCurrentWeather(city){
  //  let queryStringData = getQueryStringData(city);
  //  let url = prepUrl('weather', queryStringData);

  //    return axios.get(url)
  //    .then(function(currentWeather){
  //      return currentWeather.data
  //    })  
  // }


