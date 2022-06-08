declare global {
  interface BasementMerch {
    name: string
    price: number
    previewUrl: string
    description: string
  }

  interface CartItemT extends BasementMerch {
    count: number
    size: 'S' | 'M' | 'L' | 'XL'
  }
}

export {}
