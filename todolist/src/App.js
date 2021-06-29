import React from 'react';
import './App.css';
import Input from './components/Input'
import { TodoItem } from './components/TodoItem';

import { useSelector } from 'react-redux';
import { selectedTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectedTodoList);
  return (
    <div className="App">
      <div>
        {
          
          todoList.map((itemList) => (
            <TodoItem
            key={itemList.id}
            name={itemList.item}
            done={itemList.done}
            
            />
            
          ))
        }
      </div>
      <Input />
    </div>
  );
}

export default App;
