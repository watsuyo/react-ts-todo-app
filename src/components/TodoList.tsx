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

  const todoDelete = (selectedTodo: Todo) => {
    setTodos(todos => todos.filter(todo => todo.id !== selectedTodo.id))
  }

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todos={todos}
          todo={todo}
          todoDone={todoDone}
          todoDelete={todoDelete}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList
