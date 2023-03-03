import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggledTodos }) {
  return (
      todos.map(item => {
        return <Todo key={item.id} toggledTodos={toggledTodos} todo={item} />
      })
  )
}
