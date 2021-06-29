import React, { useState } from 'react'

const Input = () => {
  const [List, setList] = useState('');
  const addTodo = () => {


  }
  return (
    <div>
      <input type="text" value={List} onChange={({target})=> setList(target.value)} />
      <button onClick={addTodo}>Add na Todo</button>
    </div>
  )
}

export default Input;
