import React, { useState } from 'react'
import styled from '@emotion/styled'
// import { css } from '@emotion/react'

function TodoList() {
  const initialState = [
    {
      task: 'Learn Vue.js',
      isCompleted: false,
    },
    {
      task: 'Learn React Hook',
      isCompleted: false,
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false,
    },
  ]

  const [todo, setTodo] = useState(initialState)

  const [task, setTask] = useState('')

  const handleNewTask = (event) => {
    setTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (task === '') return
    console.log({ task, isCompleted: true })
    console.log('----------------------')
    console.log(todo)
    setTodo((todo) => [...todo, { task, isCompleted: false }])
    setTask('')
  }

  // const handleRemoveTask = (index) => {
  //   const newTodo = [...todo]
  //   newTodo.splice(index, 1)
  //   setTodo(newTodo)
  // }

  const handleUpdateTask = (index) => {
    let newTodo = todo.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    console.log(todo)
    setTodo(newTodo)
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        Add Task :{' '}
        <input
          value={task}
          placeholder='Add New Task'
          onChange={handleNewTask}
        />
      </form>
      <ul>
        {todo.map((todo, index) => (
          <List key={index} style={todo.isCompleted === true ? completed : {}}>
            {todo.task}
            <span onClick={() => handleUpdateTask(index)}>X</span>
          </List>
        ))}
      </ul>
    </div>
  )
}

const completed = {
  opacity: 0.5,
}
const List = styled.li``

export default TodoList
