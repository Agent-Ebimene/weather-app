const LocationInput = ({
  handleChangeLocation,
  handleSubmit,
  location,
  errorMessage,
  weatherForecastType,
  handleWeatherForecastTypeChange,
}) => {
  return (
    <div>
      <form
        onSubmit={(e, location) => handleSubmit(e, location)}
        className="location-form"
      >
        <input
          type="text"
          placeholder="Enter a Location"
          onChange={handleChangeLocation}
          value={location}
        ></input>

        <p className={`error-text ${errorMessage ? "show-error" : ""}`}>
          {errorMessage}
        </p>
        <div className="radio-buttons">
          Forecast Type:
          <div className="radio-container">
            <p> Current</p>
            <input
              type="radio"
              name="forecast"
              value="weather"
              checked={weatherForecastType === "weather"}
              onChange={handleWeatherForecastTypeChange}
            ></input>
          </div>
          <div className="radio-container">
            <p>5 day forecast</p>
            <input
              name="forecast"
              type="radio"
              value="forecast"
              checked={weatherForecastType === "forecast"}
              onChange={handleWeatherForecastTypeChange}
            ></input>
          </div>
        </div>
        <button type="submit">Get weather Data</button>
      </form>
    </div>
  );
};

export default LocationInput;
