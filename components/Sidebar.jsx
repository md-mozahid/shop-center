'use client'
import { useRouter } from 'next/navigation'
import db from '../database/db'

export default function Sidebar() {
  const categories = Object.values(
    db.products.reduce((a, { category }) => {
      a[category] = { category }
      return a
    }, {})
  )

  const router = useRouter()

  const handleClick = (e) => {
    const value = e.target.value
    router.push(`/categories/${value}`)
  }

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <button
        className="hover:border-b border-black block h-6 box-border mt-4"
        value={'all'}
        onClick={handleClick}>
        All
      </button>
      {categories?.map((category) => (
        <button
          key={category?.category}
          className="hover:border-b border-black block h-6 box-border mt-5"
          value={category?.category}
          onClick={handleClick}>
          {category?.category}
        </button>
      ))}
    </div>
  )
}
