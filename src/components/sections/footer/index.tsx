import Image from 'next/image'
import React from 'react'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <figure className={styles.rings}>
        <Image
          src="/assets/rings.svg"
          alt="Rings"
          layout="fill"
          objectPosition="center"
          objectFit="contain"
        />
      </figure>
      Wear <span className="outline">Everyday</span>
    </footer>
  )
}

export default Footer
