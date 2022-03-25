import React, { Component } from 'react'
import BubbleAlert from '../bubbleAlert';
import Button from '../button';
import Cart from '../buttonCart';
import './style.css';

export default class NavBar extends Component {
  render() {
    const { cart } = this.props

    return (
      <nav>
        <h4>Shop</h4>
        {/* <span className="bubble">
          <BubbleAlert 
            value={quantity} 
          />
        </span> */}
        <Cart cart={cart}>Cart</Cart>
      </nav>
    )
  }
}
