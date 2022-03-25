import React from 'react'
import './style.css';

export const NavBar = () => {
  return (
    <nav>
        <h4>Shop</h4>
        <button className="cart">
            Cart
        </button>
        {/* <span className="badge" /> */}
    </nav>
  )
}
