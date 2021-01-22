
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import Gifgrid from './components/Gifgrid'

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
        
   // const handleAdd= () => {
  //       setCategories([...categories, 'HunterX']);
  //      };
   
    return ( 
        <>  
            <h1>Gif Expert App</h1>
           <AddCategory category= {setCategories} /> 
            <hr/>
            <ol>  
                {
                    categories.map( category => 
//                       (<li key = {category}> {category}  </li>)
                        <Gifgrid 
                            key={category} 
                            category= {category} 
                        />    
                    )
                }
            </ol>
        </>
    );  
};
 
export default  GifExpertApp;