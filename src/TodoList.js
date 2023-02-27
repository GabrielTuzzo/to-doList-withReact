import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
      todos.map(item => {
        return <Todo key={item} todo={item} />
      })
  )
}
