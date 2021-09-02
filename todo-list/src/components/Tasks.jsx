import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/action/index';

function Tasks({tasks, deleteT}) {
  // console.log(tasks[0].task);

  const deleteTasks = (index) => deleteT(index);
  const completeTask = (id) => id

  return (
    <div>
      {tasks && tasks.map((tasks, index ) =>( 
        <div key={index}>
          <p>{tasks.task}</p>
          <button onClick={() => deleteTasks(index)}>Excluir Task</button>
          <button onClick={() =>completeTask(tasks.id)}>Atividade concluida</button>
        </div>
      ))}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteT: (task) => dispatch(deleteTask(task)),
});

const mapStateToProps = (state) => ({
  tasks: state.todo.tasks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
