import React from "react";

function Input() {
  const [task, setTask] =  React.useState('');
  return (
    <div>
      <label htmlFor="inputTask">
        <input type="text" name="inputTask" onChange={({ target }) => setTask(target.value)} />
      </label>
      <div>{task}</div>
    </div>
  )
}

export default Input
