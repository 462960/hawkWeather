import React from "react";
const imgPath = "/images/weather-icons/";
const isProd = process.env.NODE_ENV == "production";

export const WeatherIcon = ({ info }) => (
  <img
    className="weather-icon"
    src={
      isProd ? `${imgPath}${info.icon}.svg` : `/dev${imgPath}${info.icon}.svg`
    }
    alt="weather-icon"
  />
);hgh
