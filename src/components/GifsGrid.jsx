import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifsGridItem from './GifsGridItem'

const GifsGrid = ({category}) => {
    const [images, setImages] = useState([])

    useEffect(() =>{
         getGifs(category).then(setImages)
    // eslint-disable-next-line
    }, [category])

    // const getGifs = async () =>{
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=ZtQO83FzwutxRRDOBS53QfmgHPjjNNtc`
    //     const res = await fetch(url)
    //     const {data} = await res.json()
    //     const gifs = data.map(gif => ({
    //         id: gif.id,
    //         title: gif.title,
    //         url: gif.images?.downsized_medium.url
    //     }))
    //     console.log(gifs)
    //     setImages(gifs)
    // }
   
    return (
        <>
            <h3 className='title-ul' >{category}</h3>
            <div className='card-grid'>
            {
                images?.map((img,idx) => (
                    <GifsGridItem
                        key={idx}
                        {...img}
                    />
                ))
            }
            </div>
                
        </>
    )
}

export default GifsGrid
