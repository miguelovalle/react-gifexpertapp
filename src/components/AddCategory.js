
import React, { useState } from 'react'
import PropTypes from 'prop-types';
const AddCategory = ( {category}) => {

  const [inputValue, setinputValue] = useState('');  
  
  const handleInputChange = (e) => setinputValue(e.target.value);
  
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (inputValue.trim().length > 2 ) {
       category(cats => [inputValue,...cats]);
       setinputValue('');
    };
  }
 
  return ( 
    <form onSubmit={handleSubmit} >
      <input
        type='text' 
        value={inputValue}   
        onChange={ handleInputChange}
      /> 
    </form> 
  ) 
}

export default AddCategory

AddCategory.propTypes = {
  category: PropTypes.func.isRequired
}

