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
  forecastDetails,
}) => {
  return (
    <div>
      <div>
        {weatherForecastType === "weather" ? (
          previousTemp && (
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
          )
        ) : (
          <ForecastDetails
            forecastDetails={forecastDetails}
            temperatureUnit={temperatureUnit}
          />
        )}
      </div>

      <UnitDropdown
        handleTempUnitChange={handleTempUnitChange}
        temperatureUnit={temperatureUnit}
      />
    </div>
  );
};

export default WeatherDetails;
