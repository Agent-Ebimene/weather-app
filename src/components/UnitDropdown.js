import React from "react";

const UnitDropdown = ({ temperatureUnit, handleChangeTempUnit }) => {
  return (
    <div className="temp-unit-container">
      <select value={temperatureUnit} onChange={handleChangeTempUnit}>
        <option value="K">Kelvin</option>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit </option>
      </select>
    </div>
  );
};

export default UnitDropdown;
