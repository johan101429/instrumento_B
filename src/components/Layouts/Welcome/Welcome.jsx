import React from 'react'
import {Paint} from '../Paint/Paint'

export const Welcome = ({ ficha }) => {
  return (
    <>
      <h1>instrumento de evaluación</h1>
      <h2>Ficha: {ficha} </h2>
      // se crea boton que lleva al componente Paint 
      <button type="button"><a href='/Paint'>Ingresar</a> </button>
      
    </>
  )
}
