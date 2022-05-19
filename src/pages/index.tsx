import { Meta } from '~/components/common/meta'
import { PageLayout } from '~/components/layout/page'
import Header from '~/components/sections/header'
import Hero from '~/components/sections/hero'

const HomePage = () => {
  return (
    <PageLayout>
      <Meta />

      <Header />
      <Hero />
    </PageLayout>
  )
}

export default HomePage
