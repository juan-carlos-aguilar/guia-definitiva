import React, { Component } from 'react'
import BubbleAlert from '../bubbleAlert';
import './style.css';

export default class NavBar extends Component {
  render() {
    const { cart } = this.props
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);

    return (
      <nav>
        <h4>Shop</h4>
        <span className="bubble">
          <BubbleAlert 
            value={quantity} 
          />
        </span>
        <button className="cart">Cart</button>
      </nav>
    )
  }
}
