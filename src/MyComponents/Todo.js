import React from 'react'
export const TodoItem = (props) => {
  return (
    
    <div className='border my-4 px-3 py-3 rounded ' >
      <b><p className='font-weight-bold'>{props.todo.title}</p></b>
      <p className='font-weight-light'>{props.todo.desc}</p>
      <button className='btn btn-danger' onClick={()=>props.onDelete(props.todo)}>Delete</button>
      </div>
  )
}
export default TodoItem;



TodoItem.defaultProps = {
  done: false

}