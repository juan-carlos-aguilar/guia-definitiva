import React, { Component } from 'react';
import './style.css';

export class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="productCard">
        <img src={product.img} alt={product.name} />
        <p><b>{product.name}</b></p>
        <p>${product.price}</p>
        <button className="addToCartBtn">Add to Cart</button>
      </div>
    )
  }
}