import React from "react";
const ParrafoUno = ({ labelFor, labelText, inputName, inputId, maxLength }) => {
    
    return (
        <div>
            <label htmlFor={labelFor}> {labelText}</label>
            <input type="text" name={inputName} id={inputId} maxLength={maxLength}></input>
        </div>
    );
};

export default ParrafoUno;