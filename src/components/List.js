import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoDone, deleteTodoAction } from "../store/Actions";

const List = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const toggleTodo = (todoId) => dispatch(toggleTodoDone(todoId));
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={toggleTodo.bind(null, todo.id)}
            />
            &nbsp;
            <span className={todo.done ? "done" : null}>{todo.name}</span>
            <span
              className="delete-button"
              onClick={deleteTodo.bind(null, todo.id)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
