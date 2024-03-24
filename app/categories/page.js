import Sidebar from '@/components/Sidebar'
import ProductsPage from '../products/page'

export default function CategoryPage() {
  return (
    <>
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <Sidebar />
          <ProductsPage />
        </section>
      </main>
    </>
  )
}
