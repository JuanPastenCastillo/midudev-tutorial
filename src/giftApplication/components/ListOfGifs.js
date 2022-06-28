import { useState, useEffect } from 'react'
import getGifs from '../../services/getGifs.js'
import React from 'react'
import Gif from '../components/Gif.js'
// import { Link } from 'react-router-dom'

export default function ListOfGifs({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState({ loading: false, results: [] })

  useEffect(
    function () {
      setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }))

      getGifs({ keyword }).then((x) => {
        setGifs({ loading: false, results: x })
      })

    },
    [keyword]
  )

  if (gifs.loading) {
    return <i>Loading... ⌛</i>
  }

  return (
    <div>
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} key={url} title={title} url={url} />
      ))}
    </div>
  )
}

// export default ListOfGifs
