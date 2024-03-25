'use client'
import Product from '@/components/Product'
import db from '@/database/db'
import { useEffect, useState } from 'react'

export default function CategoryPage({ params: { categoryName } }) {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    if (categoryName) {
      if (categoryName === 'all') {
        setProducts(db.products)
      } else {
        const category = db.products.filter(
          (product) => product.category === categoryName
        )
        setProducts(category)
      }
    }
  }, [categoryName])
  return (
    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  )
}
