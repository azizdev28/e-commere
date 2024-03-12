"use client";
import CustomImage from "@/components/CustomImage";
import { ProductType } from "@/interface";
import { Dialog } from "@headlessui/react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const ProductDetailesPage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  const handleClick = () => {
    const products: ProductType[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];
    const isExistProduct = products.find((c) => c.id === product?.id);
    if (isExistProduct) {
      const upData = products.map((c) => {
        if (c.id === product?.id) {
          return {
            ...c,
            ququantity: c.ququantity + 1,
          };
        }
        return c;
      });
      localStorage.setItem("carts", JSON.stringify(upData));
    } else {
      const data = [...products, { ...product, ququantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
  };
  const handleClose = () => {
    setOpen(false);
    router.back();
  };
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      setProduct(product);
      setLoading(false);
    }
    getData();
  }, [id]);
  return (
    <Dialog open={open} onClose={handleClose} className=" relative z-50  ">
      <div aria-hidden="true" className="inset-0 bg-black/30 fixed">
        <div className="fixed  inset-0 overflow-y-auto">
          <div className=" flex min-h-full items-center justify-center p-4">
            <Dialog.Panel
              className={" mx-auto  max-w-3xl  rounded bg-white p-10"}
            >
              {" "}
              {loading ? (
                <div className=" h-8  w-8  rounded-full  border-2 border-dotted border-blue-600" />
              ) : (
                <div className="flex gap-h-8 h-96">
                  {product?.image && (
                    <div className=" relative w-72 h-full hidden md:inline">
                      <CustomImage product={product} fill />
                    </div>
                  )}
                  <div className=" flex-1 flex-col  flex">
                    <div className="flex-1">
                      <h4>{product?.title}</h4>
                      <p>{product?.price}</p>
                      <div className="flex  items-center text-sm my-4">
                        <p>{product?.rating.rate}</p>
                        {product?.rating.rate && (
                          <div className="flex items-center ml-2 mr-6">
                            {Array.from(
                              {
                                length: Math.floor(product.rating.rate),
                              },
                              (_, i) => (
                                <FaStar
                                  key={i}
                                  className="text-yellow-500 h-4 w-4"
                                />
                              )
                            )}
                            {Array.from(
                              {
                                length: 5 - Math.floor(product.rating.rate),
                              },
                              (_, i) => (
                                <CiStar
                                  key={i}
                                  className="h-4 w-4 text-yellow-500"
                                />
                              )
                            )}
                          </div>
                        )}

                        <p className="text-blue-600 hover:underline cursor-pointer text-xs">
                          See all{product?.rating.count}reviews
                        </p>
                      </div>
                      <p className="line-clamp-5 text-sm">
                        {product?.description}
                      </p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <button
                        className="button py-3 rounded-lg w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover: text-black"
                        onClick={handleClick}
                      >
                        Add to bag
                      </button>
                      <button
                        onClick={() => window.location.reload()}
                        className="button py-3 rounded-lg w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover: text-black"
                      >
                        View full details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductDetailesPage;
