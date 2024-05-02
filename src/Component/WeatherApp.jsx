import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "OKara",
    feelslike: 34.43,
    temp: 34.4,
    tempMin: 37,
    tempMax: 40,
    humadity: 47,
    weather: "Dry Sun",
  });
  let UpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "#00adff" }}>WEATHER APP </h2>
      <SearchBox UpdateInfo={UpdateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
