import React, { useState } from 'react'

//Este hook recibe un objeto que es cada propiedad de mi formulario que quiero manipular y tiene una funcion para leerlo facilment handleInputChange

export const UseForm = (initialState = {}) => {


    const [values, setvalues] = useState(initialState)

    const reset = () => {
        setvalues(initialState);
    }

    const hundleInputChange = ({ target }) => {

        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, hundleInputChange, reset];


}