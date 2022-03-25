import React from 'react'
import { ProductCard } from '../../components/productCard'

export const AllProducts = () => {
  return (
    <div className="allProductsContainer">
        <h3 className="pageTitle">Store</h3>
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}
