import React from "react";
const CheckBox = ({
  inputType,
  inputName,
  inputId,
  isChecked,
  labelFor,
  labelText,
}) => {
  return (
    <p>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        checked={isChecked}
      ></input>
      <label htmlFor={labelFor}>{labelText}</label>
    </p>
  );
};

export default CheckBox;
