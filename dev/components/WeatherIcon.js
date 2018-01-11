import React from "react";
const URL = "https://weather.skepton.ru/images/weather-icons/";
const localURL = "/images/weather-icons/";
const isDev = process.env.NODE_ENV !== "production";

export const WeatherIcon = ({ info }) => (
	<img
		className="weather-icon"
		src={isDev ? `${URL}${info.icon}.svg` : `${localURL}${info.icon}.svg`}
		alt="weather-icon"
	/>
);
