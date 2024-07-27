import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Ritesh",
    age: 22
  }
  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind test</h1>
      <div className='sm:flex justify-between gap-2'>
        <Card userName="Suzan" btnText="Click Me" />
        <Card userName="Hammond" />
      </div>
    </>
  )
}

export default App
