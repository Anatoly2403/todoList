import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actionTypes";

export const initialState = {
  todos: [],
};

const handlers = {
  [ADD_TODO]: (state, { payload }) => ({
    ...state,
    todos: [...state.todos, payload],
  }),
  [REMOVE_TODO]: (state, { payload }) => ({
    ...state,
    todos: [
      ...state.todos.slice(0, payload),
      ...state.todos.slice(payload + 1),
    ],
  }),
  [EDIT_TODO]: (state, { payload }) => ({
    ...state,
    todos: [
      ...state.todos.slice(0, payload.id),
      payload.todo,
      ...state.todos.slice(payload.id + 1),
    ],
  }),
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
