import React from "react";

import UnitDropdown from "./UnitDropdown";

const WeatherDetails = ({
  icon,
  handleChangeTempUnit,
  temperatureUnit,
  iconUrl,
  weatherData,
  cityName,
  description,
  pressure,
  humidity,
}) => {
  return (
    <>
      <div className="weather-details">
        <article className="weather-info">
          <h2>
            {weatherData} °{temperatureUnit}
          </h2>
          <p>{cityName}</p>
          <h3>{description}</h3>
          <h3> Pressure:{pressure}</h3>
          <h3>Humidity: {humidity}</h3>
        </article>
        <article className="weather-icon">
          {icon ? <img src={iconUrl} alt=""></img> : ""}
        </article>
      </div>
      <UnitDropdown
        handleChangeTempUnit={handleChangeTempUnit}
        temperatureUnit={temperatureUnit}
      />
    </>
  );
};

export default WeatherDetails;
