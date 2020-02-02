import React, { useState } from 'react'
import { Todo } from './types'
import EditMode from './EditMode'

type Props = {
  todos: Todo[]
  todo: Todo
  todoDone: (todo: Todo) => void
  todoDelete: (todo: Todo) => void
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem: React.FC<Props> = ({
  todos,
  todo,
  todoDone,
  todoDelete,
  setTodos
}) => {
  let [isShowUpdateForm, setIsShowUpdateForm] = useState(false)
  const Progress = todo.isDone ? <span>完了</span> : <span>未完了</span>

  const toggleChange = () => {
    setIsShowUpdateForm((isShowUpdateForm = !isShowUpdateForm))
  }

  return (
    <li>
      <input type="checkbox" onChange={() => todoDone(todo)} />
      <span>
        {Progress} ID: {todo.id}
      </span>
      {isShowUpdateForm ? (
        <EditMode
          isShowUpdateForm={isShowUpdateForm}
          setIsShowUpdateForm={setIsShowUpdateForm}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          toggleChange={toggleChange}
        />
      ) : (
        <span>
          {todo.title}
          <button onClick={toggleChange}>編集</button>
        </span>
      )}
      <button onClick={() => todoDelete(todo)}>削除</button>
    </li>
  )
}

export default TodoItem
