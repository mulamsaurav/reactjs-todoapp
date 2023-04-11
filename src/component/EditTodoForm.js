import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setvalue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setvalue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update your task"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
