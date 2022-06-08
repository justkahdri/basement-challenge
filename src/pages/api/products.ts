import type { NextApiRequest, NextApiResponse } from 'next'

const products: BasementMerch[] = [
  {
    name: 'Black t-shirt',
    price: 7.95123,
    previewUrl: '/assets/products/remera_basement_black.png',
    description: 'Unisex Basic Softstyle T-Shirt'
  },
  {
    name: 'Black hoodie',
    price: 13,
    previewUrl: '/assets/products/buzo_basement_black.png',
    description: 'Black Over The Head Hood'
  },
  {
    name: 'Black cap',
    price: 23.1,
    previewUrl: '/assets/products/snapback_cap.png',
    description: 'The basement Logo in a bold, simple form.'
  }
]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<BasementMerch[]>
) {
  setTimeout(() => res.status(200).json(products), Math.random() * 2000)
}
