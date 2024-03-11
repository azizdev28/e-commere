"use client";
import React, { FC, useState } from "react";
import { ProductType } from "@/interface";
import Image from "next/image";

interface Props {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  console.log(fill);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Image
        src={product.image}
        alt={product.title}
        fill
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
          loading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default CustomImage;
