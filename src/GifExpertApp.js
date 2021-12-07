import React, {useState} from 'react'
import AddCategory from './components/AddCategori'
import GifsGrid from './components/GifsGrid'

const GifExpertApp = () => {
    const [category, setCategory] = useState('rick and morty')

    return (
        <>
            <h2>GifExpertApp</h2> 
            <AddCategory
                setCategory={setCategory}
            />
            <hr/>
            <GifsGrid  category={category} />
        </>
    )
}

export default GifExpertApp
