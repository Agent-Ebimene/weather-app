import React from "react";

const LocationInput = ({ handleChange, handleSubmit, location }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Location"
          onChange={handleChange}
          value={location}
        ></input>
        <button type="submit">Get weather forecast</button>
      </form>
    </div>
  );
};

export default LocationInput;
