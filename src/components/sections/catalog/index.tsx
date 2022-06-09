import React from 'react'

import styles from './Catalog.module.css'
import CatalogCard from './catalogCard'

interface CatalogProps {
  products: BasementMerch[]
}

const Catalog = ({ products }: CatalogProps) => {
  return (
    <section className={styles.catalog}>
      {products?.map((product) => (
        <CatalogCard {...product} key={product.name} />
      ))}
    </section>
  )
}

export default Catalog
