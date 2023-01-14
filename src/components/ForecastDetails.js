import React from "react";

const ForecastDetails = () => {
  return (
    <div className="forecast-details">
      <div className="forecast-weather-info">
        <article>
          <h2>temperature</h2>
          <p>Abuja</p>
          <h3>Details</h3>
          <h3> Pressure</h3>
          <h3>Humidity: </h3>
        </article>
        {/* <article className="weather-icon">
          {icon ? <img src={iconUrl} alt=""></img> : ""}
        </article> */}
      </div>
    </div>
  );
};

export default ForecastDetails;
