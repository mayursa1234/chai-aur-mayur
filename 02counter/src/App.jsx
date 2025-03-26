import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // let counter=5
  let[counter, setCounter] = useState(15)
  const addValue=() => {
    // console.log("value added", Math.random());
    
    // counter= counter + 1
    setCounter(counter+1)
    // console.log("clicked",counter);
  }

  const removeValue= ()=> {
    setCounter(counter - 1)
  }

  



  return(
    <>
    <h1>Mayur vijay sawarbandhe</h1>
    <h2>Count Value:{counter}</h2>

    <button
    onClick={addValue}
    >Add values</button>
    <br />
    <button onClick={removeValue}
    >Remove Values</button>
    </>
  )
}

export default App
