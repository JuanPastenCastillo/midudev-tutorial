import { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => {
            console.log("async await here:",json)
            setData(json)
          })
      } catch (error) {
        console.log("error:", error)
      }
    })()
  }, [])

  return (
    <div>
      <h2>Async await here</h2>

      <br />

      <ul>

        {data.map((x) => (
          <li key={x.id}>
            User id: {x.id}, User title: {x.title}.
          </li>
        ))}
      </ul>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  )
}

export default AsyncAwait
