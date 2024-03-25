"use client";
import { usePathname, useRouter } from "next/navigation";
import db from "../database/db";
import CustomLink from "./CustomLink";

export default function Sidebar() {
  const pathname = usePathname();

  const categories = Object.values(
    db.products.reduce((a, { category }) => {
      a[category] = { category };
      return a;
    }, {})
  );

  const router = useRouter();

  const handleClick = (e) => {
    const value = e.target.value;
    router.push(`/categories/${value}`);
  };

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <CustomLink path="/categories/all">
        <button
          className="hover:border-b border-black block h-6 box-border mt-4"
          value={"all"}
          onClick={handleClick}
        >
          All
        </button>
      </CustomLink>
      {categories?.map((category) => (
        <CustomLink
          key={category?.category}
          path={`/categories/${category?.category}`}
        >
          <button
            className="hover:border-b border-black block h-6 box-border mt-5"
            value={category?.category}
            onClick={handleClick}
          >
            {category?.category}
          </button>
        </CustomLink>
      ))}
    </div>
  );
}
