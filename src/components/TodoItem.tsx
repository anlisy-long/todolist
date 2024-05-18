import { useContext } from "react";
import { MyContext } from "./MyProvider";
import { StateProps } from "../store/reducer";

interface Props {
  todo: StateProps;
}

const TodoItem = ({ todo }: Props) => {
  const { dispatch } = useContext(MyContext);
  const changeHandler = () => {
    dispatch({
      type: "CHANGE_FINISHED",
      id: todo.id
    })
  }
  
  const delateHandler = () => {
    dispatch({
      type: "DELETE_TODO",
      id: todo.id
    })
  }

  const spanStyle = {
    textDecoration: todo.isDone ? "line-through" : "none"
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.isDone} onChange={changeHandler} />
      <span style={spanStyle}>{todo.text}</span>
      <button onClick={delateHandler}>X</button>
    </div>
  )
}

export default TodoItem;