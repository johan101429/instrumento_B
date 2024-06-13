import React from 'react'
import './Paint.css'
import { RandomImages } from '../../RandomImages/RandomImages'


//se crea boton para regresar a la pagina principal del instrumento 

export const Paint = () => {

  const randomNumber = (min,max) => Math.random() * (max - min) + min

  const handleImages = () => {    
    console.log(RandomImages())
  }



  return (
    <div className='paint'>
      <img src="" alt="" />
      <button className='btnPictures' onClick={handleImages}>Imagen aleatoria</button>
      <button type="button"><a href='/#'>Ingresar</a> </button> 

    </div>
  )
}
