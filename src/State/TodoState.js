import React, { useReducer } from "react";
import { TodoContext } from "../Context/todoContext";
import { todoReducer, initialState } from "./todoReducer";
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actionTypes";

const TodoState = ({ children }) => {
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState);

  const add = (todo) => {
    if (todo) {
      dispatch({ type: ADD_TODO, payload: todo });
    }
  };
  const remove = (index) => {
    dispatch({ type: REMOVE_TODO, payload: index });
  };
  const edit = ({ todo, index }) => {    
    dispatch({ type: EDIT_TODO, payload: { todo: todo, id: index } });
  };

  return (
    <TodoContext.Provider value={{ todos, add, remove, edit }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
