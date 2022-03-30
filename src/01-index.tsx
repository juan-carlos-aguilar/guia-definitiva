import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'
import App from './App'

const store = createStore((state = 0, action) => {
  // action = { type: 'tipo de accion', payload: any }
  switch (action.type) {
    case 'increase': {
      return state + 1
    }
    case 'decrease': {
      return state - 1 
    }
    default:
      return state
  }
  console.log({ state, action })
  return state;

})

store.dispatch({ type: 'lala' })
store.dispatch({ type: 'increase' })
store.dispatch({ type: 'decrease' })
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
