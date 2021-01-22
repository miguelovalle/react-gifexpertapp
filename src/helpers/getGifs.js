

export const getGifs = async(category) => {

    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BbTvTkh8oNeD6Ue2oMLkTCFZWa5xMXKq`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs= data.map( img => {
        return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}