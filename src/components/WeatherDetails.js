import React from "react";

import UnitDropdown from "./UnitDropdown";
import CurrentWeatherData from "./CurrentWeatherData";
import ForecastDetails from "./ForecastDetails";

const WeatherDetails = ({
  icon,
  handleTempUnitChange,
  temperatureUnit,
  iconUrl,
  temperature,
  previousTemp,
  cityName,
  description,
  pressure,
  humidity,
  weatherForecastType,
}) => {
  return (
    <>
      {previousTemp && weatherForecastType === "weather" ? (
        <CurrentWeatherData
          previousTemp={previousTemp}
          cityName={cityName}
          description={description}
          pressure={pressure}
          humidity={humidity}
          iconUrl={iconUrl}
          icon={icon}
          temperature={temperature}
          temperatureUnit={temperatureUnit}
        />
      ) : (
        <ForecastDetails />
      )}

      <UnitDropdown
        handleTempUnitChange={handleTempUnitChange}
        temperatureUnit={temperatureUnit}
      />
    </>
  );
};

export default WeatherDetails;
