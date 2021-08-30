import React from "react";
import { connect } from 'react-redux';
import { setNewTask } from '../redux/action/index';

function Input(NewTask) {
  const [task, setTask] =  React.useState('');

  const addNewTask = () => {
    if(task) {
      NewTask.NewTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <label htmlFor="inputTask">
        <input type="text" value={task} name="inputTask" onChange={({ target }) => setTask(target.value)} />
      </label>
      <button
        onClick={addNewTask}
      >
        ola
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  NewTask: (task) => dispatch(setNewTask(task)),
});

export default connect(null, mapDispatchToProps)(Input);
