import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = ({setCategory}) => {
    const [inputValue, setinputValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(inputValue.trim().length < 2) return;
        setCategory(inputValue)
        //setcategories(inputValue)
        setinputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Busca tus Gifs'
                value= {inputValue}
                onChange={e => setinputValue(e.target.value)}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
  };
export default AddCategory
