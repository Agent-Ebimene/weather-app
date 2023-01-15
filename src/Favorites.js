import React from "react";
import FavoriteWeatherData from "./components/FavoriteWeatherData";

const Favorites = ({
  handleCloseLocation,
  showLocation,
  favorites,
  handleSubmit,
  handleShowFavoriteData,
  showFavoriteLocationData,
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
    <div
      className={`favorites-container ${
        showLocation ? "show-favorites-container" : ""
      }`}
    >
      <article className="favorites-locations">
        <span className="close-btn" onClick={handleCloseLocation}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <h2 className="favorites-header">Favourite Cities</h2>
        <div className="location-names">
          {favorites.map((location, index) => (
            <div
              key={index}
              onClick={(e, location) => {
                handleSubmit(e, location);
                handleShowFavoriteData();
              }}
            >
              <div className="favorite-location">
                <h3>{location}</h3>
              </div>
              {showFavoriteLocationData && (
                <FavoriteWeatherData
                  handleCloseFavoriteData={handleCloseFavoriteData}
                  showFavoriteLocationData={showFavoriteLocationData}
                  icon={icon}
                  iconUrl={iconUrl}
                  temperature={temperature}
                  cityName={cityName}
                  description={description}
                  pressure={pressure}
                  humidity={humidity}
                  temperatureUnit={temperatureUnit}
                  handleTempUnitChange={handleTempUnitChange}
                />
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Favorites;
