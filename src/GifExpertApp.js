import React, {useState} from 'react'
import AddCategory from './components/AddCategori'
import GifsGrid from './components/GifsGrid'

const GifExpertApp = () => {
    const [categories, setcategories] = useState('rick and morty')

    return (
        <>
            <h2>GifExpertApp</h2> 
            <AddCategory
                setcategories={setcategories}
            />
            <hr/>
            <ul>
                <GifsGrid  category={categories} />
            </ul>
        </>
    )
}

export default GifExpertApp
