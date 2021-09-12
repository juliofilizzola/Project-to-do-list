import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../redux/action/index';
import { BsCheckBox, BsXSquare } from "react-icons/bs";

import "./tasks.css"

function Tasks({tasks, deleteT, completed}) {
  const deleteTasks = (index) => deleteT(index);
  const completeTask = (id) => {
   let obTasks = tasks.map((taskId) => {
      if ( id === taskId.id ) {
        return {
          task: taskId.task,
          id,
          completed: !taskId.completed
        }
      }
      return taskId;
    });
    completed(obTasks);
  };


  return (
    <div className="task-list">
      {tasks && tasks.map((tasks, index ) =>(
        <div key={index} className={`task-list-item ${tasks.completed? 'completed' : ''}`}>
          <p>{tasks.task}</p>
          <div className="btn">
            <button type="button" onClick={() => deleteTasks(index)}><BsXSquare/></button>
            <button type="button" onClick={() => completeTask(tasks.id)}><BsCheckBox/></button>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteT: (task) => dispatch(deleteTask(task)),
  completed: (task) => dispatch(updateTask(task)),
});

const mapStateToProps = (state) => ({
  tasks: state.todo.tasks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
