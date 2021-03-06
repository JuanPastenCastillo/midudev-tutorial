const apiKey = 'BFCIpBg6jercfkrleNlkR5LDoS0zUdbk'

export default function getGifs(
  { keyword = 'error' } = {},
  { howMuch = 3 } = {}
) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${howMuch}&offset=0&rating=g&lang=en`

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      console.dir('response:', response)
      const { data } = response
      const gifs = data.map((x) => {
        const { 
          // images, 
          title, 
          id } = x
        const { url } = x.images.downsized
        return { title, id, url }
      })
      return gifs
    })
}
