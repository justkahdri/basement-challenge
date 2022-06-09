import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'

import { useCartContext } from '~/context/cart'
import { parseCurrency } from '~/lib/utils'

import styles from './Card.module.css'

const catalogCard = (props: BasementMerch) => {
  const { name, price, previewUrl } = props
  const { setCartProduct, products } = useCartContext()
  const [showOverlay, setShowOverlay] = useState(false)

  const addToCart = () =>
    setCartProduct(name, { ...props, count: 1, size: 'M' })

  const handleClick = () => {
    if (products.has(name)) {
      // TODO Implement multiple sizes option
      alert('You already have this product on cart!')
    } else {
      addToCart()
    }
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
          <span className="outline">ADD TO CART</span>
        </div>
      </figure>
      <h5>{name}</h5>
      <span>{parseCurrency(price)}</span>
    </article>
  )
}

export default catalogCard
