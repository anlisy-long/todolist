
import { useContext } from "react";
import TodoItem from "./TodoItem";
import { MyContext } from "./MyProvider";

const TodoList = () => {
  const { state:todoList } = useContext(MyContext);
  const todoListDom = todoList.map((item) => <TodoItem key={item.id} todo={item} />);
  
  return (
    <div className="todo-list">
      {todoListDom}
    </div>
  )
}

export default TodoList;