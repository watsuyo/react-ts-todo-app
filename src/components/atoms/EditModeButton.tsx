import React from 'react'

type Props = {
  toggleChange: () => void
}

const Toggle: React.FC<Props> = ({ toggleChange }) => {
  return (
    <span>
      <button onClick={toggleChange}>キャンセル</button>
    </span>
  )
}

export default Toggle
