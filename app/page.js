import Product from "@/components/Product";
import db from "@/database/db";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {db?.products?.slice(0, 12).map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
