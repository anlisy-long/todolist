import { useContext, useState } from "react";
import { MyContext } from "./MyProvider";

const Todoinput = () => {
  const { dispatch } = useContext(MyContext);
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const addHandle = () => {
    dispatch({
      type: 'ADD',
      todo: {
        id: Date.now(),
        text,
        completed: false
      }
    });
    setText('');
  }

  return (
    <div className="todo-input">
      <input type="text"
        placeholder="请输入代办事项"
        onChange={handleChange}
        value={text}
        className="addInput"
      />
      <button className="addButton" onClick={addHandle}>添加 ＋</button>
    </div>
  )
}

export default Todoinput;