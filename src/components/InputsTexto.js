import React from "react";
const InputsTexto = ({
  labelFor,
  labelText,
  inputType,
  inputName,
  inputId,
  maxLength,
  rows,
  cols,
  isTextArea,
}) => {
  return (
    <p>
      <label htmlFor={labelFor}> {labelText}</label>
      {isTextArea ? (
        <textarea
          name={inputName}
          id={inputId}
          rows={rows}
          cols={cols}
        ></textarea>
      ) : (
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          maxLength={maxLength}
        ></input>
      )}
    </p>
  );
};

export default InputsTexto;
