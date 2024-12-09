// Form.js
import React from 'react';
import ParrafoUno from './ParrafoUno';
import ParrafoDos from './ParrafoDos';
import ParrafoTres from './ParrafoTres';

export default function Form() {
    return(
        <div>
            <ParrafoUno
            labelFor='nombre'
            labelText='Nombre: '
            inputName='nombre'
            inputId='nombre'
            maxLength={50}/>

            <ParrafoDos
            labelFor="apellido"
            labelText="Apellido: "
            inputName="apellido"
            inputId="apellido"
            maxLength={50}/>

            <ParrafoTres
            /* Hombre */
            labelForH='sexo-h'
            inputNameH='sexo'
            inputIdH='sexo-h'
            inputValueH='h'
            labelTextH='hombre'
            /* Mujer */
            labelForM='sexo-m'
            inputNameM='sexo'
            inputIdM='sexo-m'
            inputValueM='m'
            labelTextM='mujer'
            />
        </div>

    );
};
