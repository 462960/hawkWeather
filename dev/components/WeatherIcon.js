import React from 'react';
const isDev = process.env.NODE_ENV !== 'production'


export const WeatherIcon = ({info}) => <img  className="weather-icon" src={isDev ? `https://weather.skepton.ru/images/weather-icons/${info.icon}.svg` : `/images/weather-icons/${info.icon}.svg`} alt="weather-icon"/>