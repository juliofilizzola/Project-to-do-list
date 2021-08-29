import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/action/index';

function Tasks({tasks, deleteT}) {

  const deleteTasks = (index) => deleteT(index);

  return (
    <div>
      {tasks && tasks.map((task, index ) =>( 
        <div key={index}>
          <p>{task}</p>
          <button onClick={() => deleteTasks(index)}>Excluir Task</button>
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
