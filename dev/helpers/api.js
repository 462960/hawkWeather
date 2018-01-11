import axios from "axios";

const _baseURL = "https://api.openweathermap.org/data/2.5/";
const _APIKEY = process.env.API_KEY;

export const getForecastByName = (variant, city) =>
	axios
		.get(`${_baseURL}${variant}?q=${city}&appid=${_APIKEY}`)
		.then(res => res.data)
		.catch(err => console.log("Error:", err));

export const getForecastByCoords = (lat, lon) =>
	axios
		.get(`${_baseURL}weather?lat=${lat}&lon=${lon}&appid=${_APIKEY}`)
		.then(res => res.data)
		.catch(err => console.log("Error:", err));
