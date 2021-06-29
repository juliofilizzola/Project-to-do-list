import React from 'react';
import './App.css';
import Input from './components/Input'

const todoList = [{
    item: 'Todo',
    done: false,
    id: 57542874,
},{
  item: 'Todo2',
  done: true,
  id: 235742887
}]

function App() {
  return (
    <div className="App">,
      <div>
        {todoList.map((itemList) => ())}
      </div>
      <Input />
    </div>
  );
}

export default App;
