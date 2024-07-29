import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook to make variable
  const passwordRef = useRef(null)

  //used to execute to write logic of all states when any changes occur
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) {
      str += "0123456789"
    }
    if (charAllow) {
      str += "!@#$%^&*=?/"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select() // ?: optional select to avoid null value
    passwordRef.current?.setSelectionRange(0, 20) //range to select password
    window.navigator.clipboard.writeText(password) //clipboard save
  }, [password, setPassword])

  //used to run the passwordGenerator when some changes occur
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md shadow-lg rounded-lg mx-auto px-4 py-3 my-8 text-orange-500 bg-gray-700"><h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button className='outline-none bg-blue-700 px-5 py-0.5 shrink-0 text-white hover:bg-blue-500' onClick={copyPasswordToClip}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='numInput' defaultChecked={numAllow} onChange={() => { setNumAllow((prev) => { return !prev }) }} className='cursor-pointer' />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="charInput" defaultChecked={charAllow} onChange={() => { setCharAllow((prev) => { return !prev }) }} className='cursor-pointer' />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App