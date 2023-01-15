import React from "react";

const ForecastDetails = ({ forecastDetails, temperatureUnit }) => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <>
      {forecastDetails ? (
        <div>
          <div className="weather-forecast">
            {forecastDetails.slice(0, 5).map((day, index) => (
              <div className="day" key={index}>
                <div className="time">{day.dt_txt}</div>
                <div className="icon">
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].description}
                  />
                </div>
                <div className="temp">
                  <div className="high-temp">{day.main.temp_max}</div>
                  <div className="low-temp">{day.main.temp_min}</div>
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
