import React from "react";
const ParrafoTres = ({ labelForH, inputNameH, labelTextH, labelTextM, inputIdH, inputValueH, labelForM, inputNameM, inputIdM, inputValueM }) => {
    return (
        <div>
            Sexo: <input type="radio" name={inputNameH} id={inputIdH} value={inputValueH}></input>
            <label htmlFor={labelForH}>{labelTextH}</label>
            <input type="radio" name={inputNameM} id={inputIdM} value={inputValueM}></input>
            <label htmlFor={labelForM}>{labelTextM}</label>
        </div>
    );
}
export default ParrafoTres;