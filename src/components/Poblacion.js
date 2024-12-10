import React from "react";

const Poblacion = ({ labelFor, labelText, inputName, inputId, cities }) => {
  return (
    <p>
      <label htmlFor={labelFor}>{labelText}</label>
      <select name={inputName} id={inputId}>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </p>
  );
};

export default Poblacion;
