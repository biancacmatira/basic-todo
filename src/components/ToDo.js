import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/Actions";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));

  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addTodo({
      id: uuid(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ToDo;
