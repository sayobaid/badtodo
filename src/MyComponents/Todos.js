import React from 'react'
import TodoItem from './Todo'

export default function Todos(props) {
  return (
    <div className='container'>
      {props.todos.length == 0 ? "No Todos to Display" :

        props.todos.map((todo) => {
          return <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} onComplete={props.onComplete} />
        })
      }
    </div>
  )
}
