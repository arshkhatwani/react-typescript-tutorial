import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active tasks</span>
        {todos.map((item) => (
          <SingleTodo
            todo={item}
            key={item.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      <div className="todos remove">
        <span className="todos__heading">Completed tasks</span>
      </div>
    </div>
  );
};

export default TodoList;
