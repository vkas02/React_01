import {useState} from "react"
function App() {
  const [color,setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-lg">test
            <button onClick={()=>setColor("red")}  className="outline-none px-4 py-1 text-white rounded-md shadow-lg" style={{backgroundColor:"red"}}>
              Red
            </button>
            <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 text-white rounded-md shadow-lg" style={{backgroundColor:"blue"}}>
              Blue
            </button>
            <button onClick={()=>setColor("Green")} className="outline-none px-4 py-1 text-white rounded-md shadow-lg" style={{backgroundColor:"Green"}}>
              Green
            </button>
            <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 text-white rounded-md shadow-lg" style={{backgroundColor:"black"}}>
              Black
            </button>
            <button onClick={()=>setColor("magenta")} className="outline-none px-4 py-1 text-white rounded-md shadow-lg" style={{backgroundColor:"magenta"}}>
              Magenta
            </button>
          </div>
      </div>
    </div>

  )
}

export default App
