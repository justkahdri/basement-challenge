import { SIZE } from '~/lib/utils'
declare global {
  interface BasementMerch {
    name: string
    price: number
    previewUrl: string
    description: string
  }

  interface CartItemT extends BasementMerch {
    count: number
    size: SIZE
  }
}

export {}
