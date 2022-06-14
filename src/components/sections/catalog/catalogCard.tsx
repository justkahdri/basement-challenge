import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'

import { useCartContext } from '~/context/cart'
import { parseCurrency, SIZE } from '~/lib/utils'

import styles from './Card.module.css'

const catalogCard = (props: BasementMerch) => {
  const { name, price, previewUrl } = props
  const { setCartProduct, products, displayCart } = useCartContext()
  const [showOverlay, setShowOverlay] = useState(false)

  const addToCart = () =>
    setCartProduct(name, { ...props, count: 1, size: SIZE.M })

  const handleClick = () => {
    if (!products.has(name)) {
      addToCart()
      // TODO Implement multiple sizes option
    }
    displayCart()
  }

  const handleOverlay: MouseEventHandler = (e) => {
    if (e.type === 'mouseenter') {
      setShowOverlay(true)
    } else if (e.type === 'mouseleave') {
      setShowOverlay(false)
    }
  }

  return (
    <article className={styles.product}>
      <figure
        className={styles['preview-container']}
        onClick={handleClick}
        onMouseEnter={handleOverlay}
        onMouseLeave={handleOverlay}
      >
        <Image
          className={styles.preview}
          src={previewUrl}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
        <div
          className={styles.overlay}
          style={showOverlay ? { display: 'flex' } : {}}
        >
          <span className="outline">
            {products.has(name) ? 'BUY ME' : 'ADD TO CART'}
          </span>
        </div>
      </figure>
      <h3>{name}</h3>
      <span>{parseCurrency(price)}</span>
    </article>
  )
}

export default catalogCard
