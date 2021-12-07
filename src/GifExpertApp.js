import React, {useState} from 'react'
import AddCategori from './components/AddCategori'

const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One puch', 'Dragon ball', 'Naruto'])
  
    // const handleAdd = () =>{
    //     setcategories([
    //         ...categories, 'pockemon go!'
    //     ])
    // }


    return (
        <>
            <h2>GifExpertApp</h2> 
            <AddCategori/>
            <hr/>
            <ul>
                {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                )) }
            </ul>
        </>
    )
}

export default GifExpertApp
