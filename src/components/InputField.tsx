import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //just copy this from hovering cursor over setTodo to view type
  handleAdd: (e: React.FormEvent) => void;
}

// const InputField = ({ todo, setTodo }: Props) => {
// another way to give type to props
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        value={todo}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
