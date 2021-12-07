import React, {useState} from 'react'

const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One puch', 'Dragon ball', 'Naruto'])
    const [categories, setcategories] = useState(['One puch', 'Dragon ball', 'Naruto'])
    const handleAdd = () =>{
        setcategories([
            ...categories, 'pockemon go!'
        ])
    }

    return (
        <>
            <h2>GifExpertApp</h2> 
            <hr/>
            <button onClick={handleAdd} >Agregar</button>
            <ul>
                {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                )) }
            </ul>
        </>
    )
}

export default GifExpertApp
