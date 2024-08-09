import React from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
      <h1>Learning about Redux</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
