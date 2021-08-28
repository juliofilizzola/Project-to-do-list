import React from "react";
import { connect } from 'react-redux';
import { setNewTask } from '../redux/action/index';

function Input(NewTask) {
  const [task, setTask] =  React.useState('');
  const addNewTask = () => {
    NewTask.NewTask(task)
  }
  return (
    <div>
      <label htmlFor="inputTask">
        <input type="text" name="inputTask" onChange={({ target }) => setTask(target.value)} />
      </label>
      <button
        onClick={addNewTask}
      >
        ola
      </button>
      <div>{task}</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  NewTask: (task) => dispatch(setNewTask(task)),
})

export default connect(null, mapDispatchToProps)(Input)
