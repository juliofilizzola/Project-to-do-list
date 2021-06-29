import React from "react";
import Checkbox from '@material-ui/core/Checkbox';


export const TodoItem = ({ name, done, id }) => {
  // const handleChange = () => {

  // }
  return (
    <div>
      <Checkbox
        checked={ done }
        onChange={'handleChange'}
        name="checkedB"
        color="primary"
      />
      <p> {name} </p>
    </div>
  );
};
