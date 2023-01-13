import React from "react";

const UnitDropdown = ({ temperatureUnit, handleChangeTempUnit }) => {
  return (
    <div className="temp-unit-container">
      <select value={temperatureUnit} onChange={handleChangeTempUnit}>
        <option value="">Kelvin</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit </option>
      </select>
    </div>
  );
};

export default UnitDropdown;
