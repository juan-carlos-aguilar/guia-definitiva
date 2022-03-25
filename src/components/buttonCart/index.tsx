import React, { Component } from 'react'
import BubbleAlert from '../bubbleAlert';
import './style.css';

export default class Cart extends Component {
  render() {
    const { cart } = this.props
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0);

    return (
      <div>
          <span className="bubble">
              {quantity !== 0 
                ? <BubbleAlert value={quantity} />
                : null
              }
          </span>
          <button className="cart">Cart</button>
      </div>
    )
  }
}
