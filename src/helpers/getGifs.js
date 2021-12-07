export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=ZtQO83FzwutxRRDOBS53QfmgHPjjNNtc`
    const res = await fetch(url)
    const {data} = await res.json()
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }))
    return gifs
    
}