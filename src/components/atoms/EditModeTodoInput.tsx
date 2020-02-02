import React, { useState } from 'react'
import { Todo } from '../types'

type Props = {
  isShowUpdateForm: boolean
  setIsShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  todos: Todo[]
  todo: Todo
}

const EditModeTodoInput: React.FC<Props> = ({
  isShowUpdateForm,
  setIsShowUpdateForm,
  todos,
  todo,
  setTodos
}) => {
  const [inputTitle, setInputTitle] = useState('')
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const addTodo = () => {
    const newTodo: Todo = {
      id: todo.id,
      title: inputTitle,
      isDone: todo.isDone
    }

    const updatedTodos = todos.map(todo =>
      todo.id === newTodo.id ? newTodo : todo
    )

    setTodos(updatedTodos)
    setInputTitle('')
    setIsShowUpdateForm((isShowUpdateForm = false))
  }

  return (
    <span>
      <input type="text" onChange={inputChange} />
      <button onClick={addTodo}>更新</button>
    </span>
  )
}

export default EditModeTodoInput
