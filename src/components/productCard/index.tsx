import React, { Component } from 'react';
import Button from '../button';
import './style.css';

export class ProductCard extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <div className="productCard">
        <img src={product.img} alt={product.name} />
        <p><b>{product.name}</b></p>
        <p>${product.price}</p>
        <Button
          onClick={() => addToCart(product)} 
          className="addToCartBtn">
            Add to Cart
        </Button>
      </div>
    )
  }
}