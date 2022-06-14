import Image from 'next/image'
import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react'

import { useCartContext } from '~/context/cart'
import { parseCurrency, SIZE } from '~/lib/utils'

import styles from './cartItem.module.css'

const CartItem = (props: CartItemT) => {
  const { setCartProduct, removeCartProduct } = useCartContext()
  const sizes = ['S', 'M', 'L', 'XL']
  const [count, setCount] = useState(props.count)

  const updateProduct = (newValues: Partial<CartItemT>) => {
    setCartProduct(props.name, { ...props, ...newValues })
  }

  const applyCount = (difference: number) => {
    const newCount = count + difference
    if (newCount > 0) {
      setCount(newCount)
      updateProduct({ count: newCount })
    } else {
      removeCartProduct(props.name)
    }
  }

  const handleCount: FocusEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    const integer = parseInt(value)
    if (integer > 0) {
      setCount(integer)
    } else {
      setCount(1)
    }
  }

  const handleSize: ChangeEventHandler<HTMLInputElement> = (event) => {
    const selectedSize = event.target.value as SIZE
    updateProduct({ size: selectedSize })
  }

  return (
    <li className={styles.card}>
      <figure className={styles.cover}>
        <Image
          alt={props.name}
          src={props.previewUrl}
          layout="fill"
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
          <button
            type="button"
            onClick={() => applyCount(-1)}
            onDoubleClick={() => applyCount(-4)}
          >
            -
          </button>
          <input
            id="count"
            type="number"
            onChange={({ target }) => setCount(Number(target.value))}
            className={styles['count-input']}
            value={count}
            onBlur={handleCount}
          />
          <button
            type="button"
            onClick={() => applyCount(1)}
            onDoubleClick={() => applyCount(4)}
          >
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
            onChange={handleSize}
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
