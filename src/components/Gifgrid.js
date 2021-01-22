
import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';


const Gifgrid = ({category}) => {

 
  const {data:images, loading} = useFetchGifs( category );

  return (
    <>
      <h3>{category} </h3>  
      { loading && <p>loading...</p>   }
       <div className="card-grid">
      
        <div>
          {
            images.map( (img) => (
              <GifGridItem 
                key={img.id}  
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
