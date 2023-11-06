import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const image = "https://avatars.githubusercontent.com/u/110516540?v=4"
  return (
    <>
    <h1 className="bg-green-500 p-4 m-4 rounded-xl">props project</h1>
    <Card heading="Ayush Shukla" btnText="Read Me" imageCard={image}/>
    <Card/>
    </>
  )
}

export default App
