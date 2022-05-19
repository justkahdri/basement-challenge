import React from 'react'

import styles from './cartDrawer.module.css'
import CartItem from './cartItem'

const CartDrawer = () => {
  const cart = [
    {
      name: 'Black t-shirt',
      description: 'Unisex Basic Softstyle T-Shirt',
      count: 3,
      price: 12.5,
      url: '/assets/products/remera_basement_black.png',
      size: 'S'
    },
    {
      name: 'BOtrak t-shirt',
      description: 'Unisex Basic Softstyle T-Shirt',
      count: 3,
      price: 12.5,
      url: '/assets/products/remera_basement_black.png',
      size: 'M'
    }
  ]

  return (
    <>
      <input
        type="checkbox"
        className={styles.cartButton}
        tabIndex={0}
        id={styles['cart-toggle']}
        name="cart-open"
      />
      <label
        htmlFor={styles['cart-toggle']}
        id={styles['cart-open-label']}
        className={styles.cartButton}
      >
        CART (0)
      </label>
      <label htmlFor={styles['cart-toggle']} id={styles.overlay}></label>
      <aside id={styles.drawer}>
        <label htmlFor={styles['cart-toggle']} id={styles['cart-close-label']}>
          → CLOSE
        </label>
        <h3 className={styles.title}>
          YOUR <span className="outline">CART</span>
        </h3>
        <ul className={styles['cart-list']}>
          {cart.length ? (
            cart.map((item) => <CartItem key={item.name} {...item} />)
          ) : (
            <p>
              There is nothing here...
              <br /> Let's add new swag! 😎
            </p>
          )}
        </ul>
        <footer className={styles.footer}>
          <p className={styles.total}>TOTAL: $37,50</p>
          <button type="button" className={styles.checkout}>
            CHECKOUT
          </button>
        </footer>
      </aside>
    </>
  )
}

export default CartDrawer
