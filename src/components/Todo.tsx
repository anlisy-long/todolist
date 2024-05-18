import TodoList from "./TodoList";
import Todoinput from "./Todoinput";
import MyProvider from "./MyProvider";
import './styles.css';

const Todo = () => {

  return (
    <MyProvider >
      <div className="todo">
        <div className="title">ToDoList</div>
        <Todoinput />
        <TodoList />
      </div>
    </MyProvider>
  );
};

export default Todo;