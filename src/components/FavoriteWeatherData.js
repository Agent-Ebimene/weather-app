import React from "react";
import UnitDropdown from "./UnitDropdown";

const FavoriteWeatherData = ({
  handleCloseFavoriteData,
  temperature,
  icon,
  iconUrl,
  temperatureUnit,
  cityName,
  description,
  pressure,
  humidity,
  handleTempUnitChange,
}) => {
  return (
    <div className="favorite-weather-data">
      <div className="weather-details fav-weather-details">
        <span className="fav-close-btn" onClick={handleCloseFavoriteData}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <article className="weather-info ">
          <h2>
            {temperature.toFixed(3)} °{temperatureUnit}
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
        handleTempUnitChange={handleTempUnitChange}
        temperatureUnit={temperatureUnit}
      />
    </div>
  );
};

export default FavoriteWeatherData;
