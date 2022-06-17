import React, { useState, useReducer, memo } from "react"
import styled from "styled-components"

const WrapperClass = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 align-content: center;
 text-align: center;
 flex-direction: column;

 > * {
  margin: 10px;
 }

 > button {
  // padding: 1.2rem;
  width: 30rem;
  font-size: inherit;
  cursor: pointer;
  background: royalblue;
  color: white;
  border: none;

  //outline:none;
  border-radius: 10px;
  transition: background 0.5s, color 0.5s, outline 0.5s;
 }

 > button:hover {
  background: white;
  color: black;
  outline: 1px solid black;
 }
`

const initialValue = { counter: 0 }
const reducer = (state, action) => {
 // console.log(action.type, action.payload, state)
 if (action.type === "increment") return { counter: state.counter + 1 }
 if (action.type === "decrement") return { counter: state.counter - 1 }
 if (action.type === "setZero") return { counter: (state.counter = 0) }
 if (action.type === "set" && !Number.isNaN(Number(action.payload)))
  return { counter: Number(action.payload) }

 return state
}

function Functions() {
 const [state, updateState] = useState(0)
 const [howManyTimesUsed, setHowManytimesUsed] = useState(0)
 const [stateReducer, dispatch] = useReducer(reducer, initialValue)

 let counterUsed = () => setHowManytimesUsed(howManyTimesUsed + 1)

 return (
  <WrapperClass>
   <h2>This is with functions</h2>
   <span>{stateReducer.counter}</span>
   <button
    onClick={() => {
     dispatch({ type: "increment" })
     counterUsed()
    }}
   >
    Increment
   </button>
   <button
    onClick={() => {
     dispatch({ type: "decrement" })
     counterUsed()
    }}
   >
    Decrement
   </button>
   <button
    onClick={() => {
     dispatch({ type: "setZero" })
     counterUsed()
    }}
   >
    Set to zero
   </button>
   <button
    onClick={() => {
     dispatch({ type: "set", payload: state })
     counterUsed()
    }}
   >
    Set a value
   </button>
   <input
    value={state}
    onChange={(e) => {
     console.log(Number(e.target.value))
     return updateState(e.target.value)
    }}
   ></input>
   <span>Times clicked the buttons: {howManyTimesUsed}</span>
  </WrapperClass>
 )
}

export default Functions
