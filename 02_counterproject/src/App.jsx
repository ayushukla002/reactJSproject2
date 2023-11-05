import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]= useState(0)
  //let counter = 2

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("remove clicked", counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h2>counter: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
