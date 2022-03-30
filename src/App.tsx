import { useDebugValue, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  entities: [],
  filter: "all",
};

export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "filter/set":
      return action.payload;
    default:
      return state;
  }
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "todo/add": {
      return state.concat({ ...action.payload });
    }
    case "todo/complete": {
      const newTodos = state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
      return newTodos;
    }
    default:
      return state;
  }
};

export const reducer = (state = initialState, action) => {
  return {
    entities: todosReducer(state.entities, action),
    filter: filterReducer(state.filter, action),
  };
};

// Reducer, handles complete/incomplete states
// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'todo/add': {
//       return {
//         ...state,
//         entities: state.entities.concat({ ...action.payload })
//       }
//     }
//     case 'todo/complete': {
//       const newTodos = state.entities.map(todo => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, completed: !todo.completed }
//         }
//         return todo
//       })
//       return {
//         ...state,
//         entities: newTodos
//       }
//     }
//     case 'filter/set': {
//       return {
//         ...state,
//         filter: action.payload,
//       }
//     }
//   }
//   return state
// }

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => dispatch({ type: "todo/complete", payload: todo })}
    >
      {todo.title}
    </li>
  );
};

const selectTodos = (state) => {
  const { entities, filter } = state;
  if (filter === "complete") {
    return entities.filter((todo) => todo.completed);
  }

  if (filter === "incomplete") {
    return entities.filter((todo) => !todo.completed);
  }

  return entities;
};
const App = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  // handleform submit
  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, completed: false, id };
    dispatch({ type: "todo/add", payload: todo });
    setValue("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch({ type: "filter/set", payload: "all" })}>
        All Items
      </button>
      <button
        onClick={() => dispatch({ type: "filter/set", payload: "complete" })}
      >
        Complete
      </button>
      <button
        onClick={() => dispatch({ type: "filter/set", payload: "incomplete" })}
      >
        Incomplete
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
