import Image, { ImageProps } from 'next/image'
import React from 'react'

import styles from './floating.module.css'

const Floating = (props: ImageProps) => (
  <figure className={styles.floating}>
    <Image alt="Floating asterisk" layout="fill" {...props} />
  </figure>
)

export default Floating
