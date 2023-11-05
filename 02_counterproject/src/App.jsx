import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]= useState(0)
  //let counter = 2

  const addValue = () => {
    if (counter == 20){
      // console.log("it's 20");
      return
    }
    // console.log("clicked", counter);
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter == 0){
      return
    }
    // console.log("remove clicked", counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h2>counter: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>

    </>
  )
}

export default App
