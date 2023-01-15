import React from "react";

const CurrentWeatherData = ({
  previousTemp,
  icon,
  iconUrl,
  pressure,
  cityName,
  temperature,
  humidity,
  description,
  temperatureUnit,
}) => {
  return (
    <div>
      {previousTemp ? (
        <div>
          <div className="weather-details">
            <article className="weather-info">
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CurrentWeatherData;
