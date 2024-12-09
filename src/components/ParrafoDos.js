import React from "react";
const ParrafoDos = ({labelFor, labelText, inputName, inputId, maxLength}) => {
    return(
        <div>
            <label htmlFor={labelFor}>{labelText}</label>
            <input type="texto" name={inputName} id={inputId} maxLength={maxLength}></input>
        </div>
    );
}
export default ParrafoDos;