import React, {useState} from 'react'
import AddCategory from './components/AddCategori'
import GifsGrid from './components/GifsGrid'

const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Naruto'])

    return (
        <>
            <h2>GifExpertApp</h2> 
            <AddCategory
                setcategories={setcategories}
            />
            <hr/>
            <ul>
                {categories.map((item, index) => (
                    <GifsGrid key={index} category={item} />
                )) }
            </ul>
        </>
    )
}

export default GifExpertApp
