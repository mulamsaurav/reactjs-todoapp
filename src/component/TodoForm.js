import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter your task"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
