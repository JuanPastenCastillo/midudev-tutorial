import { useEffect, useState } from "react"

const initialDataObj = [
  { name: "Obj one", id: "a", completed: false },
  { name: "Obj two", id: "b", completed: false },
  { name: "Obj three", id: "c", completed: false },
  { name: "Obj four", id: "d", completed: false },
]

const initialDataArr = ["Learn React", "Learn Next", "Learn javascript"]

const ListComponent = () => {
  const [value, setValue] = useState("")
  const [dataArr, setDataArr] = useState(initialDataArr)
  const [dataObj, setDataObj] = useState(initialDataObj)

  // const [valueObj, setValueObj] = useState("")
  const [dataFetch, setDataFetch] = useState([])

  const handleChangeArr = (e) => {
    setValue(e.target.value)
  }
  const handleSubmitArr = (e) => {
    if (value) {
      setDataArr(dataArr.concat(value))
    }
    setValue("")
    e.preventDefault()
  }

  const handleChangeCheckbox = (id) => {
    setDataObj(
      dataObj.map((x) => {
        if (x.id === id) {
          return { ...x, completed: !x.completed }
        } else {
          return x
        }
      }),
    )
    console.log("dataObj:", dataObj)
  }

  const handleRemove = (id) => {
    setDataObj(dataObj.filter((x) => x.id !== id))
  }

  /* Not work yet */
  // const handleChangeObj = (e) => {
  //   setValueObj(e.target.value)
  // }
  // const handleSubmitObj = (e) => {
  //   console.log('valueObj:', valueObj, dataFetch)
  //   if (valueObj) {
  //     let newId = Object.keys(dataFetch).length + 1
  //     setDataFetch(
  //       // { ...dataFetch, ...{ id: newId, name: valueObj } }
  //       dataFetch.push([{id:newId, name:valueObj}])
  //     )
  //   }
  //   setValueObj("")
  //   e.preventDefault()
  // }

  useEffect(() => {
    ; (async () => {
      try {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => {
            console.log("ListComponent:", json)
            setDataFetch(json)
            console.log("dataFetch:", dataFetch)
          })
      } catch (error) {
        console.log("error:", error)
      }
    })()
  }, [])

  return (
    <div>
      <h2>List component here</h2>

      {/* <p>Add data to obj</p>
      <form onSubmit={handleSubmitObj} >
        <input type="text" value={valueObj} onChange={handleChangeObj} />
        <button type="submit">Add item to obj</button>
      </form> */}

      <ul>
        {(dataFetch || []).map((x) => (
          <li key={x.id}>
            Name: {x.name}
            <br />
            ID: {x.id}.
          </li>
        ))}
      </ul>

      <p>Add data to arr</p>
      <form onSubmit={handleSubmitArr}>
        <input type="text" value={value} onChange={handleChangeArr} />
        <button type="submit">Add item to arr</button>
      </form>

      <ul>
        {dataArr.map((x) => (
          <li key={x}>Data: {x}</li>
        ))}
      </ul>

      <p>Data Obj here</p>
      <ul>
        {dataObj.map((x) => (
          <li key={x.id}>
            <label>
              <input
                type="checkbox"
                checked={x.completed}
                onChange={() => handleChangeCheckbox(x.id)}
              />
              {x.name}
            </label>
            <button type="button" onClick={() => handleRemove(x.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListComponent
