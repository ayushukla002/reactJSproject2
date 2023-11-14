
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]= useState("white")

  return (
    <>
      <div className=" m-0 w-screen h-screen" 
      style={{backgroundColor: color}}>
        
        <div className=" bg-white-400 mx-5">
          
          <button
          onClick={() => {setColor("red")}}
          style={{backgroundColor:"red"}}
          >red</button>
          <button
          onClick={() => {setColor("green")}}
          style={{backgroundColor:"green"}}
          >green</button>
          <button
          onClick={() => {setColor("blue")}}
          style={{backgroundColor:"blue"}}
          >blue</button>
        </div>
      </div>
    </>
  )
}

export default App
