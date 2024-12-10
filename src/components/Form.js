// Form.js
import React from "react";
import InputsTexto from "./InputsTexto";
import InputsRadio from "./InputsRadio";
import CheckBox from "./CheckBox";
import Poblacion from "./Poblacion";
import InputSubmit from "./InputSubmit_";

export default function Form() {
  const ciudades = ["Alicante", "Madrid", "Sevilla", "Valencia"];
  return (
    <div className="formulario">
      <InputsTexto
        labelFor="nombre"
        labelText="Nombre: "
        inputType="text"
        inputName="nombre"
        inputId="nombre"
        maxLength={50}
      />

      <InputsTexto
        labelFor="apellido"
        labelText="Apellido: "
        inputType="text"
        inputName="apellido"
        inputId="apellido"
        maxLength={50}
      />

      <InputsRadio
        /* Hombre */
        labelForH="sexo-h"
        inputNameH="sexo"
        inputIdH="sexo-h"
        inputValueH="h"
        labelTextH="hombre"
        /* Mujer */
        labelForM="sexo-m"
        inputNameM="sexo"
        inputIdM="sexo-m"
        inputValueM="m"
        labelTextM="mujer"
      />

      <InputsTexto
        labelFor="correo"
        labelText="Correo: "
        inputType="text"
        inputName="correo"
        inputId="correo"
        maxLength={100}
      />

      <Poblacion
        labelFor="poblacion"
        labelText="Población:"
        inputName="poblacion"
        inputId="poblacion"
        cities={ciudades}
      />

      <InputsTexto
        labelFor="descripcion"
        labelText="Descripción:"
        inputName="descripcion"
        inputId="descripcion"
        rows={6}
        cols={60}
        isTextArea={true}
      />
      <CheckBox
        inputType="checkbox"
        inputName="info"
        inputId="info"
        isChecked="checked"
        labelFor="info"
        labelText=" Deseo recibir información sobre novedades y ofertas."
      />

      <CheckBox
        inputType="checkbox"
        inputName="condiciones"
        inputId="condiciones"
        /* isChecked="checked" */
        labelFor="condiciones"
        labelText=" Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos."
      />

      <InputSubmit
      inputType="submit"
      inputValue="Enviar"
      />
    </div>
  );
}
