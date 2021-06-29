import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input = () => {
  const [List, setList] = useState('');
  const dispatch = useDispatch();
  const addTodo = () => {

    dispatch(saveTodo({
      item: List,
      done: false,
      id: Date.now(),
    }));
  }
  return (
    <div>
      <input type="text" value={List} onChange={({target})=> setList(target.value)} />
      <button onClick={addTodo}>Add na Todo</button>
    </div>
  )
}

export default Input;
