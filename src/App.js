import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, seTodos] = useState([{ id:1, name: 'Todo 1', complete: 'false' }]) 
  return (
    <>
    <TodoList todos = {todos} />
    <input type="name"/>
    <button style = { {color: 'green'} }>Add</button>
    <button>Clear Completed Tasks</button>
    <div>0 left To do</div>
    </>
  )
}

export default App;
