import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { setCheck } from '../features/todoSlice';
import { useDispatch } from 'react-redux';
// import '../style/tudoItem.css'

export const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id))
  }
  return (
      <div className="todoList">
         <div className="container">
          <Checkbox
            checked={ done }
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
          <p> {name} </p>
        </div>
      </div>
  );
};
