import { NEW_TASK, DELETE_TASK } from "../action";

const INITIAL_STATE = {
  tasks: [],
  isLoading: false,
};

function todo(state = INITIAL_STATE, action) {
  switch(action.type) {
    case NEW_TASK: 
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
      isLoading: false,
    }
    case DELETE_TASK: 
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
      isLoading: true,
    }
    default:
      return state;
  }
}

export default todo;
