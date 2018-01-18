import axios from "axios";

const _baseURL = "https://api.openweathermap.org/data/2.5/";
const _APIKEY = process.env.API_KEY;

export async function getForecastByName(variant, city) {
  try {
    const response = await axios.get(
      `${_baseURL}${variant}?q=${city}&appid=${_APIKEY}`
    );
    return response.data;
  } catch (err) {
    console.log("Error:", err);
  }
}

export async function getForecastByCoords(lat, lon) {
  try {
    const response = await axios.get(
      `${_baseURL}weather?lat=${lat}&lon=${lon}&appid=${_APIKEY}`
    );
    return response.data;
  } catch (err) {
    console.log("Error:", err);
  }
}
