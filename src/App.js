import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'

const localStorage_key = 'todoApp.todos'


function App() {
  const [todos, setTodos] = useState([]) 
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorage_key))
    if(storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] )
  }, [])
  
  useEffect(() => {
    localStorage.setItem(localStorage_key, JSON.stringify(todos))
  }, [todos])
  
  function addTodo (e) {
    const name = todoNameRef.current.value

    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: crypto.randomUUID(),
        name: name,
        complete: false
      }]
    })
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
