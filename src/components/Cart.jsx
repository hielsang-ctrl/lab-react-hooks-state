import React from 'react'

const Cart = ({ cartItems = [] }) => {
  return (
    <aside className="cart-panel">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <span>{item.name} is in your cart.</span>
              <strong>{item.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Cart
