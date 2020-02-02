import React, { useState } from 'react'
import './App.css'
import { Todo } from './components/types'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

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
