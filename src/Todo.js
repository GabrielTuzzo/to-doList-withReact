import React from 'react'

export default function Todo({ todo, toggledTodos }) {
  
  function clickTodo() {
    toggledTodos(todo.id)
  }
  
  return (
    <div> 
        <label>
        <input type="checkbox" checked={todo.complete} onChange={clickTodo}/>
        {todo.name}
        </label>
    </div>
  )
}
