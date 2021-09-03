import React from "react";
import { connect } from 'react-redux';
import { setNewTask } from '../redux/action/index';
import { BsArrowReturnLeft } from "react-icons/bs";
import "./input.scss";

function Input({NewTask}) {
  const [task, setTask] =  React.useState('');

  const addNewTask = () => {
    if(task) {
      let obTasks = {
        task,
        id: Math.floor(Math.random() * 100000),
        completed: false,
      }
      NewTask(obTasks);
      setTask('');
    }
  };

  return (
    <div className="task-input">
      <label htmlFor="inputTask">
        <input type="text" value={task} name="inputTask" onChange={({ target }) => setTask(target.value)} />
      </label>
      <button
        type="button"
        onClick={addNewTask}
      >
        <BsArrowReturnLeft/>
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  NewTask: (task) => dispatch(setNewTask(task)),
});

export default connect(null, mapDispatchToProps)(Input);
