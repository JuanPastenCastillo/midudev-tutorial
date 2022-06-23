import { useEffect, useState } from "react"


const FetchAPI = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => {
        console.log("fetching then here:",json);
        setData(json)
      })
  }, [])

  return (
    <div>
      <h2>FetchAPI Here</h2>

      <br />
      
      <ul>
        {/* {<li>{data.map(x => `${x.id} ${x.title}`)}</li>} */}
        
        {data.map(x => (
          <li key={x.id}>
            User id: {x.id}, 
            User title: {x.title}.
          </li>
        ))}
        
      </ul>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}




    </div>
  )

}

export default FetchAPI