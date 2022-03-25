import { Component } from "react";
import './App.css';
import { NavBar } from "./components/navBar";
import { AllProducts } from "./pages/allProducts";

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '' },
      { name: 'Green Beans', price: 1200, img: '' },
      { name: 'Lettuce', price: 1000, img: '' }
    ]
  }
  
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