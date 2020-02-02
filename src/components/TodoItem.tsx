import React from 'react'
import { Todo } from './types'

type Props = {
  todo: Todo
  todoDone: (todo: Todo) => void
  // todoUpdate: (todoId: number) => void
  todoDelete: (todo: Todo) => void
}

// const TodoItem: React.FC<Props> = ({todo, todoDone, todoUpdate, todoDelete}) => {
const TodoItem: React.FC<Props> = ({ todo, todoDone, todoDelete }) => {
  const Progress = todo.isDone ? <span>完了</span> : <span>未完了</span>
  return (
    <li>
      {Progress} ID: {todo.id} {todo.title}
      <button onClick={() => todoDone(todo)}>完了</button>
      {/* <button
				onClick={
					() => todoUpdate(todo)
				}
			>更新</button> */}
      <button onClick={() => todoDelete(todo)}>削除</button>
    </li>
  )
}

export default TodoItem
