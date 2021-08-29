import React from 'react';
import { connect } from 'react-redux';

function Tasks(tasks) {

  const deleteTask = (task) => {
    const deleteTasks = tasks.tasks.filter(tasks => tasks !== task);
    console.log(deleteTasks);
  };

  return (
    <div>
      {tasks.tasks && tasks.tasks.map((task, index ) =>( 
        <div key={index}>
          <p>{task}</p>
          <button onClick={() => deleteTask(task)}>Excluir Task</button>
        </div>
      ))}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (task) => {}
});

const mapStateToProps = (state) => ({
  tasks: state.todo.tasks,
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
