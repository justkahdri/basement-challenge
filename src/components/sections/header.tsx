import Image from 'next/image'
import React from 'react'

import CartDrawer from '../common/cartDrawer'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>basement</h2>
      <figure>
        <Image
          src="/assets/hd-4k.svg"
          alt="HD 4K Certificates"
          objectFit="contain"
          objectPosition="contain"
          layout="fill"
        />
      </figure>
      <CartDrawer />
    </header>
  )
}

export default Header
