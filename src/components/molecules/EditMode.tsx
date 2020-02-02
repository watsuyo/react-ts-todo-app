import React from 'react'
import EditModeButton from '../atoms/EditModeButton'
import EditModeTodoInput from '../atoms/EditModeTodoInput'
import { Todo } from '../types'

type Props = {
  isShowUpdateForm: boolean
  setIsShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  toggleChange: () => void
  todos: Todo[]
  todo: Todo
}

const EditMode: React.FC<Props> = ({
  isShowUpdateForm,
  setIsShowUpdateForm,
  todo,
  toggleChange,
  todos,
  setTodos
}) => {
  return (
    <span>
      <EditModeTodoInput
        isShowUpdateForm={isShowUpdateForm}
        setIsShowUpdateForm={setIsShowUpdateForm}
        setTodos={setTodos}
        todos={todos}
        todo={todo}
      />
      <EditModeButton toggleChange={toggleChange} />
    </span>
  )
}

export default EditMode
