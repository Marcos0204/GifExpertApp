import React from 'react'

const GifsGrid = ({category}) => {
    const getGifs = async () =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=ZtQO83FzwutxRRDOBS53QfmgHPjjNNtc'
        const res = await fetch(url)
        const {data} = await res.json()
        const gifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }))
        console.log(gifs)
    }
    getGifs()
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifsGrid
