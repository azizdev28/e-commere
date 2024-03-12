import HeroWrapper from "@/components/HeroWrapper";
import Product from "@/components/Product";
import { ProductType } from "@/interface";
import React from "react";

const Home = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();
  console.log(products);
  return (
    <main className="container  max-w-7xl  mx-auto px-8 xl-0 ">
      <HeroWrapper />
      <section className=" flex flex-col  space-y-12">
        <h1 className="text-5xl font-bold text-center">Shopp Website</h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
