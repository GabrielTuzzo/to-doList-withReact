import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, seTodos] = useState(['Todo 1', 'Todo 2']) 
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
