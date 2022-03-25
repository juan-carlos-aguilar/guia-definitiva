import React from 'react';
import './style.css';



export const ProductCard = () => {
  return (
    <div className="productCard">
        <img src="tomato.jpg"/>
        <p><b>Tomato</b></p>
        <p>$1500</p>
        <button className="addToCartBtn">Add to Cart</button>
    </div>
  )
}