import React, { Component } from 'react'
import { ProductCard } from '../../components/productCard'
import './style.css';

export class AllProducts extends Component {

  render() {
    const { products, addToCart } = this.props

    return (
      <div>
        <h3>Store</h3>
        <div className="allProductsContainer">
          {products.map(product =>
            <ProductCard
              addToCart={addToCart}
              key={product.name}
              product={product}
            />
          )}
        </div>
      </div>
    )
  }
}
