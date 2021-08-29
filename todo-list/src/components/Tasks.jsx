import { connect } from 'react-redux';

function Tasks(tasks) {

  return (
    <div>
      {tasks.tasks && tasks.tasks.map((task, index ) =>( 
        <div key={index}>
          <p>{task}</p>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.todo.tasks,
})

export default connect(mapStateToProps)(Tasks);
