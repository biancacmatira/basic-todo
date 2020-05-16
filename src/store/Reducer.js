import { v4 as uuid } from "uuid";

const initState = {
  todos: [
    {
      id: uuid(),
      name: "Do project",
      done: true,
    },
    {
      id: uuid(),
      name: "Read a book",
      done: false,
    },
  ],
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default Reducer;
