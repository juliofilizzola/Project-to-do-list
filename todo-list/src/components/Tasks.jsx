import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../redux/action/index';

function Tasks({tasks, deleteT, completed}) {
  const deleteTasks = (index) => deleteT(index);
  const completeTask = (id) => {
   let obTasks = tasks.map((taskId) => {
      if ( id === taskId.id ) {
        taskId.completed = !taskId.completed;
      }
      return taskId;
    });
    completed(obTasks);
  };


  return (
    <div>
      {tasks && tasks.map((tasks, index ) =>(
        <div key={index}>
          <p>{tasks.task}</p>
          <div>{tasks.completed? '1': '0'}</div>
          <button onClick={() => deleteTasks(index)}>Excluir Task</button>
          <button onClick={() => completeTask(tasks.id)}>Atividade concluida</button>
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
