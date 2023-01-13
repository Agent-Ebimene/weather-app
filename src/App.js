import { useState, useEffect } from "react";

import "./App.css";

import LocationInput from "./components/LocationInput";
import WeatherDetails from "./components/WeatherDetails";
import FavouritesButton from "./components/FavouritesButton";
// import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("K");
  const [icon, setIcon] = useState(null);

  let iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  console.log(temperatureUnit);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.trim() === "") {
      setErrorMessage("Please enter a Location");
    }
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dfcd7d85ac6f6d90550dc656ec7d05c2&units=${temperatureUnit}`
    );
    if (weatherResponse.status === 404) {
      setErrorMessage("Not a real place!");
    } else {
      const weatherData = await weatherResponse.json();
      console.log(weatherData);
      setWeatherData(weatherData.main.temp);
      setHumidity(weatherData.main.humidity);
      setPressure(weatherData.main.pressure);
      setIcon(weatherData.weather[0].icon);
      setDescription(weatherData.weather[0].description);
      setCityName(weatherData.name);
      setErrorMessage("");
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeTempUnit = (e) => {
    setTemperatureUnit(e.target.value);
  };
  return (
    <div className="app">
      <LocationInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        location={location}
        errorMessage={errorMessage}
      />

      {loading ? (
        ""
      ) : (
        <WeatherDetails
          location={location}
          weatherData={weatherData}
          icon={icon}
          iconUrl={iconUrl}
          handleChangeTempUnit={handleChangeTempUnit}
          temperatureUnit={temperatureUnit}
          cityName={cityName}
          description={description}
          pressure={pressure}
          humidity={humidity}
        />
      )}
      <FavouritesButton />
    </div>
  );
}

export default App;
