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
  
  function toggledTodos(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete 
    setTodos(newTodos)
  }
  
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
  
  function clearTodos () {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function clearAllTodos() {
    const newTodos = todos.filter(todo => todo.complete && !todo.complete)
    setTodos(newTodos)
  }
  
  return (
    <>
    <TodoList todos = {todos} toggledTodos={toggledTodos} />
    <input  ref={todoNameRef} type="text"/>
    <button style = { {color: 'green'} } onClick={addTodo}>Add</button>
    <button onClick={clearTodos}>Clear Completed Tasks</button>
    <button onClick={clearAllTodos}>Clear All Tasks</button>
    <div>{todos.filter(todo => !todo.complete).length}left To do</div>
    </>
  )
}

export default App;
