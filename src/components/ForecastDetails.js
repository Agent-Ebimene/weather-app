import React from "react";

const ForecastDetails = ({ forecastDetails, temperatureUnit }) => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <>
      {forecastDetails ? (
        <div>
          <div className="forecast-container">
            {forecastDetails.map((day, i) => (
              <div key={i} className="day-container">
                <div className="day">{day.name}</div>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
                <div className="temp-container">
                  <div className="high-temp">High: {day.main.temp_max}</div>
                  <div className="low-temp">Low: {day.main.temp_min}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ForecastDetails;
