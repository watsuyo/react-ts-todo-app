import React from 'react'
import { Todo } from './types'
import TodoItem from './TodoItem'

type Props = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const todoDone = (selectedTodo: Todo) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === selectedTodo.id
          ? { ...todo, isDone: !selectedTodo.isDone }
          : todo
      )
    )
  }

  // const todoUpdate = (selectedTodo: Todo, newTodoTitle: string) => {
  // 	setTodos(todo => todo.map((todo: Todo) =>
  // 			todo.id === selectedTodo ? { ...todos, title: newTodoTitle  } : selectedTodo
  // 	))
  // }

  const todoDelete = (selectedTodo: Todo) => {
    setTodos(todos => todos.filter(todo => todo.id !== selectedTodo.id))
  }

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoDone={todoDone}
          // todoUpdate={todoUpdate}
          todoDelete={todoDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
