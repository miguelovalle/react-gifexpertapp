
import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
import {getGifs} from '../helpers/getGifs'

const Gifgrid = ({category}) => {

   const [images, setimages] = useState([]);
  useEffect( () => {  
     getGifs(category)
      .then( imgs => setimages(imgs))
   },[category]); 
 // .then(setImages) reemplaza el anterior .then. Es mas sencillo. Es asi px solo tiene una argumento y es mandado a la funcion de adentro.

  return (
    <>
      <h3>{category} </h3>  
      <div className="card-grid">
      
        <div>
          {
            images.map( (img) => (
              <GifGridItem 
                key={img.id}  
  //                    img={img} cambiando, ahora, spread manda todas las prop de img  y asi podemos usar parametros desestructurados en el componente llamado
                  {...img}
              />  
            ))
          }
        </div>
      </div>
    </>
  )
} 
export  default Gifgrid
