import React, { useState } from "react";

const TodoItem = ({ todoName, remove, edit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(todoName);

  const editName = () => setIsEdit(!isEdit);

  const renameTodo = () => {
    if (newName) {
      edit(newName);
    }
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-lg-between">
      {!isEdit ? (
        <span>{todoName}</span>
      ) : (
        <span className="w-75 d-flex justify-content-between">
          <input
            className="form-control"
            type="text"
            value={newName}
            onChange={({ target }) => setNewName(target.value)}
          />
          <div class="btn-group btn-group-sm ps-3">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={renameTodo}
            >
              &#10004;
            </button>
          </div>
        </span>
      )}
      <div className="btn-group">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={editName}
        >
          {!isEdit ? "Edit" : "Cancel"}
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={remove}
        >
          Remove
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
