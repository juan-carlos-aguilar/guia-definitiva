import React, { Component } from 'react'
import { ProductCard } from '../../components/productCard'

export class AllProducts extends Component {
  
  render() {
    const { products, addToCart } = this.props
    
    return (
      <div className="allProductsContainer">
        <h3 className="pageTitle">Store</h3>
        {products.map(product => 
        <ProductCard 
          addToCart={addToCart}
          key={product.name}
          product={product}
        />
        )}
      </div>
    )
  }
}
