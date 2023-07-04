
export const getGifs = async (category) => {
   
    const api_key = 'api_key=K6hN6nPr418dcEFuD5MBkI9mRqw7zsRO'
    const limit = 12;
    const url_api ='https://api.giphy.com/v1/gifs/search?'

    const url = `${url_api}${api_key}&q=${category}&limit=${limit}`; 
    const resp = await fetch(url)
    const { data } = await resp.json()
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}