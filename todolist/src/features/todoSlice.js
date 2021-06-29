import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo:(state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map(({id, done}) => {
       if (action.payload === id) done === true? done = false : done = true
      })
    }
  }
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectedTodoList = (state) => state.todosLists.todoList;
export default todoSlice.reducer;