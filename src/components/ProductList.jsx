import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  {
    id: 1,
    name: 'Apple',
    price: '$1.00',
    category: 'Fruits',
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Milk',
    price: '$2.50',
    category: 'Dairy',
    inStock: false,
    image:
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    price: '$79.00',
    category: 'Electronics',
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Denim Jacket',
    price: '$58.00',
    category: 'Fashion',
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80'
  }
]

const ProductList = ({ selectedCategory = 'all', addToCart }) => {
  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  return (
    <section className="product-section">
      <h2>Available Products</h2>

      {filteredProducts.length === 0 && <p>No products available</p>}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
