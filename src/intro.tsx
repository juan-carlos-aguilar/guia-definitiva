import { Component } from "react"

//***** Funcion pura siempre retorna mismo valor
const MyComp = ({ prop }) => {
  return (
    <div>
      Name: {prop}
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Branch for Hook practices</h1>
        <MyComp prop={'Carlos'}/>
      </div>
    )
  }
}