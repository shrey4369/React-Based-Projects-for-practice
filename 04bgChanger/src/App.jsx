import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("black")
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={() => { setColor("red") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => { setColor("green") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => { setColor("blue") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => { setColor("yellow") }} className='outline-none px-4 rounded-xl py-1 shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => { setColor("orange") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => { setColor("purple") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => { setColor("gray") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "gray" }}>Gray</button>
          <button onClick={() => { setColor("white") }} className='outline-none px-4 rounded-xl py-1 shadow-lg' style={{ backgroundColor: "white" }}>White</button>
          <button onClick={() => { setColor("olive") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "olive" }}>Olive</button>
          <button onClick={() => { setColor("indigo") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "indigo" }}>Indigo</button>
          <button onClick={() => { setColor("black") }} className='outline-none px-4 rounded-xl py-1 shadow-lg text-white' style={{ backgroundColor: "black" }}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
