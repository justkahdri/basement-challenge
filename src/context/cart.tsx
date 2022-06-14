import * as React from 'react'

type CartContextProps =
  | {
      products: Map<string, CartItemT>
      totalCost: number
      isOpen: boolean
      setCartProduct: (name: string, values: CartItemT) => void
      removeCartProduct: (name: string) => void
      displayCart: VoidFunction
      toggleCart: VoidFunction
    }
  | undefined

const CartContext = React.createContext<CartContextProps>(undefined)

export const CartContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = React.useState<Map<string, CartItemT>>(
    new Map()
  )
  const [totalCost, setTotalCost] = React.useState(0)
  const [loadedStorage, setLoadedStorage] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const cartFromStorage = window.localStorage.getItem('cart')
    cartFromStorage &&
      setProducts(new Map(Array.from(JSON.parse(cartFromStorage))))

    setLoadedStorage(true)
  }, [])

  React.useEffect(() => {
    loadedStorage &&
      window.localStorage.setItem(
        'cart',
        JSON.stringify(Array.from(products.entries()))
      )
    setTotalCost(
      Array.from(products.values()).reduce(
        (total, product) => total + product.price * product.count,
        0
      )
    )
  }, [products])

  function setCartProduct(name: string, values: CartItemT) {
    setProducts((currentProducts) => {
      currentProducts.set(name, values)
      return new Map(currentProducts)
    })
  }

  function removeCartProduct(name: string) {
    setProducts((currentProducts) => {
      currentProducts.delete(name)
      return new Map(currentProducts)
    })
  }

  function displayCart() {
    setIsOpen(true)
  }

  function toggleCart() {
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        setCartProduct,
        removeCartProduct,
        totalCost,
        displayCart,
        toggleCart,
        isOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = React.useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartContextProvider')
  }
  return context
}
