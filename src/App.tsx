import { Component } from "react";
import './App.css';

// Funcion pura
const MyComp = ({ prop }) => {
  return (
    <div>
      Name: {prop}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Branch for Hook practices</h1>
        <MyComp prop={'Carlos'}/>
      </div>
    )
  }
}

export default App