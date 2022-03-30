import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThunk, setFilter, setComplete, selectTodos, selectStatus } from './features/todos';
import './App.css'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => dispatch(setComplete(todo))}
    >
      {todo.title}
    </li>
  );
};

const App = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);

  // handleform submit
  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, completed: false, id };
    dispatch({ type: 'todo/add', payload: todo });
    setValue('');
  };

  if (status.loading === 'pending') {
    return <p>Cargando...</p>
  }

  if (status.loading === 'rejected') {
    return <p>{status.error}</p>
  }

  return (
    <div className='App'>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch(setFilter('all'))}>
        All Items
      </button>
      <button
        onClick={() => dispatch(setFilter('complete'))}
      >
        Complete
      </button>
      <button
        onClick={() => dispatch(setFilter('incomplete'))}
      >
        Incomplete
      </button>
      <button onClick={() => dispatch(fetchThunk())}>Fetch</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
