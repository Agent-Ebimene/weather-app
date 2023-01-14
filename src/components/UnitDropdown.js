import React from "react";

const UnitDropdown = ({ temperatureUnit, handleTempUnitChange }) => {
  return (
    <div className="temp-unit-container">
      <select value={temperatureUnit} onChange={handleTempUnitChange}>
        <option value="K">Kelvin</option>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit </option>
      </select>
    </div>
  );
};

export default UnitDropdown;
