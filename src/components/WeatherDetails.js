import React from "react";

import UnitDropdown from "./UnitDropdown";
import CurrentWeatherData from "./CurrentWeatherData";
import ForecastDetails from "./ForecastDetails";
import AddToFavoritesButton from "./AddToFavoritesButton";

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
  handleAddToFavorites,
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
              handleAddToFavorites={handleAddToFavorites}
            />
          )
        ) : (
          <ForecastDetails
            forecastDetails={forecastDetails}
            temperatureUnit={temperatureUnit}
          />
        )}
      </div>
      <div className="detail-btns">
        <AddToFavoritesButton
          handleAddToFavorites={handleAddToFavorites}
          location={cityName}
        />
        <UnitDropdown
          handleTempUnitChange={handleTempUnitChange}
          temperatureUnit={temperatureUnit}
        />
      </div>
    </div>
  );
};

export default WeatherDetails;
