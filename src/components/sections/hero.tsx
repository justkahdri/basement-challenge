import React from 'react'

import Floating from '../common/floating'
import styles from './hero.module.css'

const Hero = () => {
  const marqueeContent = "— A man can't have enough basement swag ".repeat(8)
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        BASEMENT <span className="outline">SUPPLY</span>
      </h1>
      <div className={styles.marquee_box}>
        <p className={styles.track}>{marqueeContent}</p>
      </div>
      <div className={styles.overlay}>
        <Floating src="/assets/asterisk.svg" />
        <Floating src="/assets/asterisk_variation.svg" />
      </div>
    </section>
  )
}

export default Hero
