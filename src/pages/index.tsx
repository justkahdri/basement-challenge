import { GetStaticProps } from 'next'

import { Meta } from '~/components/common/meta'
import { PageLayout } from '~/components/layout/page'
import Catalog from '~/components/sections/catalog'
import Hero from '~/components/sections/hero'
import { siteURL } from '~/lib/constants'

interface HomePageProps {
  products: BasementMerch[]
}

const HomePage = ({ products }: HomePageProps) => {
  return (
    <PageLayout>
      <Meta />

      <Hero />
      <Catalog products={products} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const res = await fetch(`${siteURL}/api/products`)
  const products = await res.json()

  if (!products) {
    return {
      notFound: true
    }
  }

  return {
    props: { products }
  }
}

export default HomePage
