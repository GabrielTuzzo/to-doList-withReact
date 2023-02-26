import TodoList from './TodoList'
import React from 'react'

function App() {
  return (
    <>
    <TodoList/>
    <input type="name"/>
    <button>Add</button>
    <button>Clear Completed Tasks</button>
    <div>0 left To do</div>
    </>
  )
}

export default App;
