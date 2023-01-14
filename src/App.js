import { useState } from "react";

import "./App.css";

import LocationInput from "./components/LocationInput";
import WeatherDetails from "./components/WeatherDetails";
// import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [location, setLocation] = useState("");
  const [previousTemp, setPreviousTemp] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("K");
  const [icon, setIcon] = useState(null);
  const [weatherForecastType, setWeatherForecastType] = useState("weather");

  let iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  const handleWeatherForecastTypeChange = (e) => {
    setWeatherForecastType(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.trim() === "") {
      setErrorMessage("Please enter a Location");
    }
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/${
          weatherForecastType === "weather" ? "weather" : "forecast"
        }?q=${location}&appid=dfcd7d85ac6f6d90550dc656ec7d05c2`
      );
      const weatherData = await weatherResponse.json();
      console.log(weatherData);

      // if (weatherResponse.status === 404) {
      //   setErrorMessage("Not a real place!");
      // } else {
      //   setPreviousTemp(weatherData.main.temp);
      //   setHumidity(weatherData.main.humidity);
      //   setPressure(weatherData.main.pressure);
      //   setIcon(weatherData.weather[0].icon);
      //   setDescription(weatherData.weather[0].description);
      //   setCityName(weatherData.name);
      //   setErrorMessage("");
      //   setLoading(false);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  // const handleChangeTempUnit = (e) => {
  //   setTemperatureUnit(e.target.value);
  // };

  const handleTempUnitChange = (e) => {
    switch (temperatureUnit) {
      case "K":
        setTemperatureUnit(e.target.value);
        break;
      case "C":
        setTemperatureUnit(e.target.value);
        break;
      case "F":
        setTemperatureUnit(e.target.value);
        break;
      default:
        setTemperatureUnit(e.target.value);
    }
  };

  let temperature;
  switch (temperatureUnit) {
    case "K":
      temperature = previousTemp;
      break;
    case "C":
      temperature = previousTemp - 273.15;
      break;
    case "F":
      temperature = ((previousTemp - 273.15) * 9) / 5 + 32;
      break;
    default:
      temperature = previousTemp;
  }

  return (
    <div className="app">
      <LocationInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        location={location}
        errorMessage={errorMessage}
        handleWeatherForecastTypeChange={handleWeatherForecastTypeChange}
        weatherForecastType={weatherForecastType}
      />

      {loading ? (
        ""
      ) : (
        <WeatherDetails
          location={location}
          temperature={temperature}
          previousTemp={previousTemp}
          icon={icon}
          iconUrl={iconUrl}
          handleTempUnitChange={handleTempUnitChange}
          temperatureUnit={temperatureUnit}
          cityName={cityName}
          description={description}
          pressure={pressure}
          humidity={humidity}
        />
      )}
    </div>
  );
}

export default App;
