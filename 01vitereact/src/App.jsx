import Nav from "./Nav"

function App() {
  const userName = "I am a user"

  return (
    //fragment   
    <>
      <h1>This is react || {userName /* evaluated expression */}</h1>
      <Nav />
      <p>Test react</p>
    </>
  )
}

export default App
