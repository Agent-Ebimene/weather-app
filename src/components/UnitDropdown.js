import React from "react";

const UnitDropdown = () => {
  return (
    <div>
      <select value={temperatureUnit} onChange={handleChangeTempUnit}>
        <option value="">Kelvin</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit </option>
      </select>
    </div>
  );
};

export default UnitDropdown;
