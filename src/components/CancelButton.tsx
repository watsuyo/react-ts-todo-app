import React from 'react'

type Props = {
  isShowUpdateForm: boolean
  setIsShowUpdateForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Toggle: React.FC<Props> = ({ isShowUpdateForm, setIsShowUpdateForm }) => {
  const clickChange = () => {
    setIsShowUpdateForm((isShowUpdateForm = true))
  }

  return (
    <span>
      <button onClick={clickChange}>編集</button>
    </span>
  )
}

export default Toggle
