import { Component } from "react";
import './App.css';
import { NavBar } from "./components/navBar";
import { AllProducts } from "./pages/allProducts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AllProducts />
      </div>
    )
  }
}

export default App