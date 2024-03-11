"use client";
import React from "react";
import { ProductType } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "./CustomImage";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="p-6 h-96 rounded-lg  flex flex-col  group hover:scale-105 transition-transform ease-out duration-200 border"
    >
      <div className="relative  max-h-80 flex-1">
        <CustomImage product={product} fill />
      </div>
      <h3 className="tracking-widest text-indigo-500 text-xs flex font-medium  ">
        <span className="text-xl"> {product.id}.</span>
        <span className="text-xl text-start title-font line-clamp-1">
          {product.title}
        </span>
      </h3>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex justify-between items-center">
        {product.price}$
        <span className="text-red-300 my-3 font-black ">
          {product.category}
        </span>
      </h2>
      <p className="leading-relaxed text-base line-clamp-2 ">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
