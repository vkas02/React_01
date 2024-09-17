import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password, setPassword]=useState('');


const passwordRef=useRef(null)


  const passwwordGenerator= useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(numberAllowed)str+="1234567890"
    if(charAllowed) str+='!@#$%^&*()'

    for(let i=1;i<=length;i++){
      let char=Math.floor (Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyToClickboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwwordGenerator()
  },[length,numberAllowed,charAllowed,passwwordGenerator])

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <div className='text-white text-center my-3'>Password Generator</div>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
        <input 
        type="text" 
        value={password} 
        className='outline-none w-full px-1 py-3'
        placeholder='password'
        readOnly 
        ref={passwordRef}
        />
        <button onClick={copyToClickboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2 mb-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}          
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label>Char</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
