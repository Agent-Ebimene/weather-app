import React from "react";

import UnitDropdown from "./UnitDropdown";

const WeatherDetails = ({
  icon,
  handleChangeTempUnit,
  temperatureUnit,
  iconUrl,
  weatherData,
}) => {
  return (
    <>
      <div className="weather-details">
        <article className="weather-info">
          <h2>
            {weatherData} °{temperatureUnit}
          </h2>
          <p>Portugal</p>
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
