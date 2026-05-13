import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <img className={styles.image} src={product.image} alt={product.name} />

      <div className={styles.details}>
        <span className={styles.category}>{product.category}</span>
        <h3>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.status}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>

      <button
        data-testid={'product-' + product.id}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
