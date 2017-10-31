import axios from 'axios';

const _baseURL = 'https://api.github.com/users/';
const _APIKEY = '76c65d2a6d6a1d398c2ecea2ba15d67e';


export const getForecast = (username) => 
  //axios.get(`https://api.github.com/users/${username}`)
  //axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=76c65d2a6d6a1d398c2ecea2ba15d67e`)
  axios.get(_baseURL + username)
       .then(res => res.data)
       .catch(err => console.log('Error:', err));


