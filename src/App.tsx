import { useSelector, useDispatch } from "react-redux"

const initialState = {
  entities: [],
}

export const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case 'todo/add': {
      return {
        ...state,
        entities: [{}]
      }
    }
  }
  return state
}

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(x => x);
  console.log(state, 'rendering');
  return (
    <div>
      <form action="">
        <input />
      </form>
      <button onClick={() => dispatch({ type: 'todo/add'})}>Todos</button>
      <button>Completados</button>
      <button>Incompletados</button>
      <ul>
        <li>todo 1</li>
        <li>todo 2</li>
      </ul>
    </div>
  )
}

export default App