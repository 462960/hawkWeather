import React from "react";
import PropTypes from "prop-types";
import {
  convertToFahrenheit,
  convertToCelsius,
  getDate,
  dayLight
} from "Helpers/utils";
const URL = "https://weather.skepton.ru/images/arrow-";
const isDev = process.env.NODE_ENV !== "production";

export const TempWind = ({ info, temp }) => {
  // Changes dark/white arow according to night/day time
  const arrowColor = dayLight(info.dt) ? "black" : "white";
  // Changes arrow direction
  const windDirection = info.wind.deg;

  const divStyle = {
    background: isDev
      ? `url(${URL}${arrowColor}.png)`
      : `url(/images/arrow-${arrowColor}.png)`,
    transform: `rotate(${windDirection}deg)`,
    borderRadius: "50%",
    marginLeft: 20,
    height: 50,
    width: 50
  };
  
  return (
    <div className="temp-wind-wrapper">
      <div className="temp-holder">
        <div>
          <div>Temp: </div>
          <span>
            {temp == "C"
              ? `${convertToCelsius(info.main.temp)}°C`
              : `${convertToFahrenheit(info.main.temp)}°F`}
          </span>
        </div>
        <div>
          <div>Max temp: </div>
          <span>
            {temp == "C"
              ? `${convertToCelsius(info.main.temp_max)}°C`
              : `${convertToFahrenheit(info.main.temp_max)}°F`}
          </span>
        </div>
        <div>
          <div>Min temp: </div>
          <span>
            {temp == "C"
              ? `${convertToCelsius(info.main.temp_min)}°C`
              : `${convertToFahrenheit(info.main.temp_min)}°F`}
          </span>
        </div>
      </div>
      <div className="wind-holder">
        <div>Wind: {info.wind.speed}m</div>
        <div style={divStyle} />
      </div>
    </div>
  );
};

TempWind.propTypes = {
  info: PropTypes.object.isRequired,
  temp: PropTypes.string.isRequired
};
