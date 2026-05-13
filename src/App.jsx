import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product])
  }

  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <div>
          <h1>Shopping App</h1>
          <p>Browse products by category and build your cart.</p>
        </div>

        <DarkModeToggle
          isDarkMode={isDarkMode}
          onToggle={() => setIsDarkMode((currentMode) => !currentMode)}
        />
      </header>

      <div className="filter-bar">
        <label htmlFor="category-filter">Filter by Category</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      <main className="shop-layout">
        <ProductList
          selectedCategory={selectedCategory}
          addToCart={addToCart}
        />

        <Cart cartItems={cartItems} />
      </main>
    </div>
  )
}

export default App
