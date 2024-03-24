export default function Sidebar() {
  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <button className="hover:border-b border-black block h-6 box-border mt-4">
        All
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        Smartphones
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        Laptops
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        Fragrances
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        Skincare
      </button>
      <button className="hover:border-b border-black block h-6 box-border mt-5">
        Groceries
      </button>
    </div>
  )
}
