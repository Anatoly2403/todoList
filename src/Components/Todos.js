import React, { useContext } from "react";
import { TodoContext } from "../Context/todoContext";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { todos, remove, edit } = useContext(TodoContext);

  return (
    <>
      <ul className="list-group">
        {todos.map((todo, i) => (
          <TodoItem
            key={`${todo}${i}`}
            todoName={todo}
            remove={() => remove(i)}
            edit={(todo) => edit({ index: i, todo: todo })}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
