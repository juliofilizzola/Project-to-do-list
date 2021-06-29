import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
  name: 'todosList',
  initialState,
  reducers: {
    saveTodo:(state = initialState.todoList, action) => {
      switch (action.type) {
        case 'SAVE':
          state.todoList.push(action.newItemList);
          break;
        default: return state;  
      }
    }
  }
});

export const { saveTodo } = todoSlice.actions
export default todoSlice.reducer