import React, { Component } from "react"
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
class Classes extends Component {
 state = {
  counter: 0,
  setNumber: 0,
  howManyUsed: 0,
  preventDefault: false,
 }

 increment = () => {
  this.setState({
   counter: this.state.counter + 1,
   howManyUsed: this.state.howManyUsed + 1,
  })
 }

 decrement = () => {
  this.setState({
   counter: this.state.counter - 1,
   howManyUsed: this.state.howManyUsed + 1,
  })
 }

 set = () => {
  this.setState({
   counter: 0,
   howManyUsed: this.state.howManyUsed + 1,
  })
 }

 capturedNumber = (value) => {
  if (!Number.isNaN(Number(value.target.value))) {
   this.setState({
    preventDefault: (this.state.preventDefault = false),
    setNumber: Number(value.target.value),
    howManyUsed: this.state.howManyUsed + 1,
   })
  } else {
   console.log("value:", value)

   this.setState({
    preventDefault: (this.state.preventDefault = true),
   })
  }
 }

 updateState = (e) => {
  console.log("Prevent default:", this.state.preventDefault)
  if (this.state.preventDefault) {
   e.preventDefault()
   this.setState({
    howManyUsed: this.state.howManyUsed + 1,
   })
  } else {
   this.setState({
    counter: this.state.setNumber,
    howManyUsed: this.state.howManyUsed + 1,
   })
  }
 }

 render() {
  return (
   <WrapperClass>
    <h2>This is with classes</h2>

    <span>{this.state.counter}</span>
    <button onClick={this.increment}>Increment</button>
    <button onClick={this.decrement}>Decrement</button>
    <button onClick={this.set}>Set to zero</button>
    <button onClick={this.updateState}>Set a value</button>
    <input
     onChange={this.capturedNumber}
    />
    <span>Times clicked the buttons: {this.state.howManyUsed}</span>
   </WrapperClass>
  )
 }
}

export default Classes

/* 
Thanks to ManiruzzamanAkash for the code of the counting (increment and decrement) with classes
https://github.com/ManiruzzamanAkash/ReactBasic2Pro/blob/Day11/src/components/CounterClass.jsx

*/
