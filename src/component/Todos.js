import React, { useState } from 'react'

const Todos = () => {
  const [todo, setTodo] = useState('')

  const handleChange = e => {
    setTodo(e.target.value)
  }

  // console.log('Todo text: ', todo)

  return (
    <div className="addTodos">
      <h1>Todos</h1>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={e => handleChange(e)}
        className="todo-input"
      />
      <button className="add-btn">Add</button>
    </div>
  )
}
export default Todos
