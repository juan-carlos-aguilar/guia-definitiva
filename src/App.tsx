import { Component, useState } from "react";
import './App.css';
import NavBar from "./components/navBar";
import { AllProducts } from "./pages/allProducts";

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1200, img: '/img/tomato.jpg' },      
      { name: 'Green Peas', price: 1100, img: '/img/arbejas.jpg' },
      { name: 'Lettuce', price: 1300, img: '/img/lettuce.jpg' },
    ],
    cart: [],
  }

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find(x => x.name === product.name)) {
      const newCart = cart.map(x => x.name === product.name
    ? ({
        ...x,
        quantity: x.quantity + 1
      })
    : x
      )
      return this.setState({ cart: newCart })
    }
    
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar cart={this.state.cart} />
        <AllProducts 
          addToCart={this.addToCart}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App