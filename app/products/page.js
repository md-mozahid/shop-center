import Product from '@/components/Product'
import db from '../../database/db'

export default function ProductsPage() {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
        {db.products.map((product) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
    </section>
  )
}
