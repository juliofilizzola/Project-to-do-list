import React from 'react';
import { connect } from 'react-redux';

function Tasks(tasks) {

  const deleteTask = (task) => {
    
  };

  return (
    <div>
      {tasks.tasks && tasks.tasks.map((task, index ) =>( 
        <div key={index}>
          <p>{task}</p>
          <button onClick={deleteTask}></button>
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
