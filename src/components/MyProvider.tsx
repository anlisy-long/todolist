import React, { createContext, useReducer } from "react"
import { ActionProps, StateProps, reducer } from "../store/reducer";

// export interface StateProps {
//   id: number;
//   text: string;
//   isDone: boolean;
// }
// export interface ContextProps {
//   todos: StateProps[];
//   changeTodo: (id: number) => void;
//   addTodo: (todo: StateProps) => void;
// }
export interface ContextProps {
  state: StateProps[],
  dispatch: React.Dispatch<ActionProps>
}
export const MyContext = createContext({} as ContextProps)
const MyProvider = (props: React.PropsWithChildren<{}>) => {
  // const [todos, setTodos] = useState<StateProps[]>([]);

  // const changeTodo = (id: number) => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, isDone: !todo.isDone };
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };

  // const addTodo = (todo: StateProps) => {
  //   setTodos([...todos, todo]);
  // };
  const initState: StateProps[] = []
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <MyContext.Provider
      // value={{ todos, changeTodo, addTodo }}
      value={{
        state,
        dispatch
      }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyProvider