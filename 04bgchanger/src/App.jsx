import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" 
    style={{
      backgroundColor : color
    }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
         onClick={() => setColor("Red")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"red"}}
          >Red</button>

          <button
         onClick={() => setColor("Purple")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"purple"}}
          >Purple</button>

          <button
         onClick={() => setColor("green")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"green"}}
          >Green</button>

          <button
         onClick={() => setColor("black")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"black"}}
          >Black</button>

          <button
         onClick={() => setColor("darkblue")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"darkblue"}}
          >Blue</button>

          <button
         onClick={() => setColor("indigo")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"indigo"}}
          >Indigo</button>

          <button
         onClick={() => setColor("orange")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"orange"}}
          >Orange</button>

          <button
         onClick={() => setColor("olive")}
          className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
          style={{backgroundColor:"olive"}}
          >Olive</button>

          <button
         onClick={() => setColor("yellow")}
          className=" outline-none px-4 py-1 rounded-full text-black shadow-lg "
          style={{backgroundColor:"yellow"}}
          >Yellow</button>

          <button
         onClick={() => setColor("lavender")}
          className=" outline-none px-4 py-1 rounded-full text-black shadow-lg "
          style={{backgroundColor:"lavender"}}
          >Lavender</button>

          <button
         onClick={() => setColor("white")}
          className=" outline-none px-4 py-1 rounded-full text-black shadow-lg "
          style={{backgroundColor:"white"}}
          >White</button>

          <button
         onClick={() => setColor("pink")}
          className=" outline-none px-4 py-1 rounded-full text-black shadow-lg "
          style={{backgroundColor:"pink"}}
          >Pink</button>

          </div>
      </div>
    </div>
  )
}

export default App
