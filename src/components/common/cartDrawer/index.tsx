import React, { useMemo } from 'react'

import { useCartContext } from '~/context/cart'
import { parseCurrency } from '~/lib/utils'

import styles from './cartDrawer.module.css'
import CartItem from './cartItem'

const CartDrawer = () => {
  const { products, totalCost, isOpen, toggleCart } = useCartContext()
  const checkoutText = useMemo(
    () =>
      Array.from(products.values())
        .reduce(
          (message, product) =>
            message.concat(`* ${product.name} - ${product.price}\n`),
          ''
        )
        .concat(
          `\nTOTAL: ${parseCurrency(totalCost)}\n\nHELLO FROM THE BASEMENT.`
        ),
    [products, totalCost]
  )

  return (
    <>
      <input
        checked={isOpen}
        onChange={toggleCart}
        type="checkbox"
        tabIndex={0}
        className="cartToggle"
        id={styles['cart-toggle']}
        name="cart-open"
      />
      <label
        htmlFor={styles['cart-toggle']}
        id={styles['cart-open-label']}
        tabIndex={0}
      >
        CART ({products.size})
      </label>
      <label htmlFor={styles['cart-toggle']} id={styles.overlay}></label>
      <aside id={styles.drawer}>
        <label
          htmlFor={styles['cart-toggle']}
          id={styles['cart-close-label']}
          tabIndex={0}
        >
          → CLOSE
        </label>
        <h3 className={styles.title}>
          YOUR <span className="outline">CART</span>
        </h3>
        <ul className={styles['cart-list']}>
          {products.size ? (
            Array.from(products.values()).map((item) => (
              <CartItem key={item.name} {...item} />
            ))
          ) : (
            <p>
              There is nothing here...
              <br /> Let's add new swag! 😎
            </p>
          )}
        </ul>
        <footer className={styles.footer}>
          <p className={styles.total}>
            TOTAL: <span>{parseCurrency(totalCost)}</span>
          </p>
          <a
            target="_blank"
            href={`https://wa.me/541161050513?text=${encodeURI(checkoutText)}`}
            rel="noopener noreferrer"
          >
            <button type="button" className={styles.checkout}>
              CHECKOUT
            </button>
          </a>
        </footer>
      </aside>
    </>
  )
}

export default CartDrawer
