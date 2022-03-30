import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'
import App from './App'

const store = createStore((state = 0, action) => {
  // action = { type: 'tipo de accion', payload: any }
  switch (action.type) {
    case 'accion': {
      return action.payload
    }
  }
  console.log({ state, action })
  return state;

})

store.dispatch({ type: 'accion', payload: 2 })
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
