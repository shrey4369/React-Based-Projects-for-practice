import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    counter++
    setCounter(counter)
    console.log("Add!", counter);
  }

  const decValue = () => {
    counter--
    setCounter(counter)
    console.log("Decrease!", counter);
  }

  const clearValue = () => {
    setCounter(15)
    console.log("Clear!", counter);
  }

  return (
    <>
      <h1>React js for fun</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>

      <button onClick={decValue}>Decrease value</button>

      <button onClick={clearValue}>Reset Value</button>
    </>
  )
}

export default App