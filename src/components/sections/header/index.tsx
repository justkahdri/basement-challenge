import Image from 'next/image'
import React from 'react'

import useMediaQuery from '~/hooks/use-media-query'
import { BREAKPOINT } from '~/lib/constants'

import CartDrawer from '../../common/cartDrawer'
import styles from './header.module.css'

const Header = () => {
  const isMobile = useMediaQuery(BREAKPOINT.mobile)

  return (
    <header className={styles.header}>
      {isMobile ? (
        <>
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
        </>
      ) : (
        <h2>b.</h2>
      )}

      <CartDrawer />
    </header>
  )
}

export default Header
