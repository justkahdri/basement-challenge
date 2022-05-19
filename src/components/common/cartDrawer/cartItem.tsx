import Image from 'next/image'
import React from 'react'

import styles from './cartItem.module.css'

interface CartItemProps {
  name: string
  description: string
  price: number
  count: number
  url: string
  size: 'S' | 'M' | 'L' | 'XL'
}

const sizes = ['S', 'M', 'L', 'XL']

const CartItem = (props: CartItemProps) => {
  return (
    <li className={styles.card}>
      <figure className={styles.cover}>
        <Image
          alt={props.name}
          src={props.url}
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <h4 className={styles.name}>{props.name.toUpperCase()}</h4>
      <p className={styles.description}>{props.description}</p>
      <div className={styles['count-container']}>
        <label className={styles['count-label']}>QUANTITY:</label>
        <div className={styles['count-input-group']}>
          <button type="button">-</button>
          <input
            type="number"
            defaultValue={props.count}
            className={styles['count-input']}
          />
          <button type="button">+</button>
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
      <p className={styles.price}>
        ${props.price.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
      </p>
    </li>
  )
}

export default CartItem
