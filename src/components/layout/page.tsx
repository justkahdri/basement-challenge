import Footer from '~/components/sections/footer'
import Header from '~/components/sections/header'

import { Container, ContainerProps } from './container'

type Props = {
  children?: React.ReactNode
  contain?: boolean | ContainerProps
}

export const PageLayout = ({ children, contain }: Props) => {
  return (
    <>
      <Header />
      <main>
        {contain ? <Container {...contain}>{children}</Container> : children}
      </main>
      <Footer />
    </>
  )
}
