import Input from "../components/Input";
import Tasks from "../components/Tasks";
import "./todo.scss";

function Todo() {
  return (
    <div className="todo-container">
      <Input/>
      <Tasks/>
    </div>
  );
}

export default Todo;
