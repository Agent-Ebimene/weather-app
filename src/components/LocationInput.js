import React from "react";

const LocationInput = ({
  handleChange,
  handleSubmit,
  location,
  errorMessage,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="location-form">
        <input
          type="text"
          placeholder="Enter a Location"
          onChange={handleChange}
          value={location}
        ></input>

        <p className={`error-text ${errorMessage ? "show-error" : ""}`}>
          {errorMessage}
        </p>
        <button type="submit">Get weather forecast</button>
      </form>
    </div>
  );
};

export default LocationInput;
