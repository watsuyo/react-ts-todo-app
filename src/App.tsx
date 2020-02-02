import React, { useState } from 'react'
import { Todo } from './components/types'
import TodoList from './components/organisms/TodoList'
import TodoInput from './components/atoms/TodoInput'

const initialState: Todo[] = [
  {
    id: 1,
    title: 'マスクを注文する',
    isDone: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialState)

  return (
    <div className="App">
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
