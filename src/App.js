import { useState, useEffect } from "react";

import "./App.css";

import LocationInput from "./components/LocationInput";
import UnitDropdown from "./components/UnitDropdown";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [temperatureUnit, setTemperatureUnit] = useState("");
  const [icon, setIcon] = useState(null);

  // const searchLocation = (address) => {
  //   const geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({ address: address }, (results, status) => {
  //     if (status === "OK") {
  //       setLocation(results[0].geometry.location);
  //     } else {
  //       setErrorMessage("This location is invalid");
  //     }
  //   });
  // };
  // useEffect(() => {
  //   searchLocation(location);
  // }, [location]);
  // switch (temperatureUnit) {
  //   case "Celcius":
  //     setTemperatureUnit("metric");
  //     break;
  //   case "Fahrenheit":
  //     setTemperatureUnit("mperial");
  //     break;
  //   default:
  //     setTemperatureUnit("");
  // }

  let iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.trim() === "") {
      setErrorMessage("Please enter a Location");
    }
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dfcd7d85ac6f6d90550dc656ec7d05c2&units=${temperatureUnit}`
    );
    if (weatherResponse.status === 404) {
      setErrorMessage("Location Not Found!");
    }
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    setWeatherData(weatherData.main.temp);
    setIcon(weatherData.weather[0].icon);
  };
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeTempUnit = (e) => {
    setTemperatureUnit(e.target.value);
  };
  return (
    <div className="app">
      <h2 className="app-header">Weather application</h2>
      <LocationInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        location={location}
      />
      <h2>{errorMessage ? `${errorMessage}` : ""}</h2>
      <h1>Weather Data :{loading === false && "Fetching Done!"}</h1>
      {icon ? <img src={iconUrl} alt=""></img> : <p>Loading....</p>}

      <UnitDropdown
        handleChangeTempUnit={handleChangeTempUnit}
        temperatureUnit={temperatureUnit}
      />
    </div>
  );
}

export default App;
