import { NEW_TASK } from "../action";

const INITIAL_STATE = {
  tasks: [],
};

function todo(state = INITIAL_STATE, action) {
  switch(action.type) {
    case NEW_TASK: 
    console.log(action.payload)
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
    }
    default:
      return state;
  }
}

export default todo;
