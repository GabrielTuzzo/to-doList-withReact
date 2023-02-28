import React, { useState, useRef, createElement } from 'react'
import TodoList from './TodoList'


function App() {
  const [todos, seTodos] = useState([]) 
  const todoNameRef = useRef()
  
  function addTodo (e) {
    const name = todoNameRef.current.value

    if (name === '') return
    console.log(name)
    todoNameRef.current.value = ''

  }  
  
  return (
    <>
    <TodoList todos = {todos} />
    <input  ref={todoNameRef} type="text"/>
    <button style = { {color: 'green'} } onClick={addTodo}>Add</button>
    <button>Clear Completed Tasks</button>
    <div>0 left To do</div>
    </>
  )
}

export default App;
