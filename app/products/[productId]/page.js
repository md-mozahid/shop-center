'use client'
import db from '@/database/db'
import Image from 'next/image'
import { useState } from 'react'

export default function SingleProduct({ params: { productId } }) {
  const [thumbnail, setThumbnail] = useState(null)
  productId = parseInt(productId, 10)
  const product = db.products.filter((product) => product?.id === productId)[0]

  if (!product) {
    return <div>Product not found !</div>
  }

  const handleImage = (img) => {
    setThumbnail(img)
  }

  const productPrice = Math.floor(product.price / 100);
  const discountPercentage =
    Math.floor(product.discountPercentage) * productPrice;
  const afterDiscountPrice = product.price - discountPercentage;

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={`${thumbnail ? thumbnail : product?.thumbnail}`}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt="iphone"
              width={100}
              height={100}
            />

            <div className="flex gap-4 mt-4">
              {product?.images &&
                product?.images.map((img) => (
                  <Image
                    key={img}
                    src={img}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
                    alt="product image"
                    onClick={() => handleImage(img)}
                  />
                ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {product?.title}
            </h1>
            <span className="text-[#919090] my-3">{product?.category}</span>
            <div className="mt-3 flex items-center justify-start gap-1">
              <div className="">({product?.rating})</div>
              {Array.from(
                { length: Math.ceil(product?.rating) },
                (_, index) => (
                  <Image
                    src="/assets/svg/star.svg"
                    key={index}
                    width={20}
                    height={20}
                    alt="star icon"
                  />
                )
              )}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${product?.price}
                </span>
                <span className="font-bold text-2xl">${afterDiscountPrice}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{product.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${afterDiscountPrice}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
