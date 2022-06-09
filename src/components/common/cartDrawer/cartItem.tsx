import Image from 'next/image'
import React, { useRef } from 'react'

import { useCartContext } from '~/context/cart'
import { parseCurrency } from '~/lib/utils'

import styles from './cartItem.module.css'

const CartItem = (props: CartItemT) => {
  const { setCartProduct, removeCartProduct } = useCartContext()
  const sizes = ['S', 'M', 'L', 'XL']
  const countInput = useRef<any>()

  const increaseCount = () => {
    const valueStr = countInput.current.value
    countInput.current.value = String(Number(valueStr) + 1)
    updateCount(countInput.current.value)
  }

  const decreaseCount = () => {
    const valueStr = countInput.current.value
    countInput.current.value = String(Number(valueStr) - 1)
    updateCount(countInput.current.value)
  }

  const updateCount = (count: number) => {
    if (count > 0) {
      setCartProduct(props.name, { ...props, count })
    } else {
      removeCartProduct(props.name)
    }
  }

  return (
    <li className={styles.card}>
      <figure className={styles.cover}>
        <Image
          alt={props.name}
          src={props.previewUrl}
          layout="fill"
          height="100%"
          width="100%"
          objectFit="contain"
        />
      </figure>
      <h4 className={styles.name}>{props.name.toUpperCase()}</h4>
      <p className={styles.description}>{props.description}</p>
      <div className={styles['count-container']}>
        <label className={styles['count-label']} htmlFor="count">
          QUANTITY:
        </label>
        <div className={styles['count-input-group']}>
          <button type="button" onClick={decreaseCount}>
            -
          </button>
          <input
            id="count"
            type="number"
            defaultValue={props.count}
            className={styles['count-input']}
            ref={countInput}
          />
          <button type="button" onClick={increaseCount}>
            +
          </button>
        </div>
      </div>
      <div className={styles.sizes}>
        SIZE:
        {sizes.map((size) => [
          <input
            key={`input-${size}`}
            type="radio"
            id={`${size}-${props.name}`}
            name={`sizes-${props.name}`}
            value={size}
            defaultChecked={props.size == size}
          />,
          <label key={`label-${size}`} htmlFor={`${size}-${props.name}`}>
            {size}
          </label>
        ])}
      </div>
      <p className={styles.price}>{parseCurrency(props.price)}</p>
    </li>
  )
}

export default CartItem
