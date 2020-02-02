import React, { useState } from 'react'
import { Todo } from './types'

type Props = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoInput: React.FC<Props> = ({ todos, setTodos }) => {
  const [inputTitle, setInputTitle] = useState('')
  const [count, setCount] = useState(todos.length + 1)

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const addTodo = () => {
    setCount(count + 1)

    const newTodo: Todo = {
      id: count,
      title: inputTitle,
      isDone: false
    }

    setTodos([newTodo, ...todos])
    setInputTitle('')
  }

  return (
    <div>
      <label>Todoリスト</label>
      <br />
      <input type="text" value={inputTitle} onChange={inputChange} />
      <button onClick={addTodo}>追加</button>
    </div>
  )
}

export default TodoInput
