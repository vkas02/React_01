import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  //let counter=15
  const addValue=()=>{
    console.log('clicked value',counter)
    if(counter<20){
      setCounter(counter+1)
    }
  }
  const removeVal=()=>{
    console.log('clicked value',counter)
    if(counter>0){
      setCounter(counter-1)
    }

  }
  return (
    <>
      <h1>react app</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeVal}>remove value</button>
    </>
  )
}

export default App
