import { Component } from "react";
import './App.css';
import { NavBar } from "./components/navBar";
import { AllProducts } from "./pages/allProducts";

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1200, img: '/img/tomato.jpg' },      
      { name: 'Green Peas', price: 1100, img: '/img/arbejas.jpg' },
      { name: 'Lettuce', price: 1300, img: '/img/lettuce.jpg' }
    ]
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <AllProducts 
          addToCart={() => console.log('Does nothing atm')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App