import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/todoContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { add } = useContext(TodoContext);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          add(todo);
          setTodo("");
        }}
      >
        AddTodo
      </button>
    </div>
  );
};

export default AddTodo;
