"use client";
import useProducts from "@/hooks/useProducts";
import MoreButton from "./MoreButton";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { topRatedDiscount } from "@/assets/home";

const TopRatedSection = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <>
      <section className="pb-10 px-4">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-6">
          {/* Left side */}
          <div className="w-full lg:w-[calc(100%/1)]">
            {/* Top */}
            <div className="flex items-center gap-x-2 mb-7">
              <h3 className="text-2xl text-black font-medium text-nowrap ">
                Top Rated Products
              </h3>
              {/* Border line */}
              <span className="h-1 w-8 rounded-md bg-green-600 block mt-1"></span>
              {/* Horizontal line */}
              <span className="h-[1px] text-stone-400 w-full bg-stone-300 mt-1"></span>
              {/* See More */}
              <MoreButton />
            </div>

            {/* Inner Col */}
            <div className="flex flex-col justify-between gap-y-6 lg:gap-x-5 lg:flex-row">
              {/* Left Inner */}
              <div className="lg:w-[calc(100%/2)]">
                {products.slice(35, 36).map((topProd) => (
                  <ProductCard
                    key={topProd.id}
                    product={topProd}
                    parentClass="!pl-0 md:!flex-row md:!gap-x-10 md:!items-center lg:!flex-col lg:!items-start"
                  />
                ))}
              </div>

              {/* Right Inner */}
              <div className="lg:w-[calc(100%/1)]">
                <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:gap-x-4 lg:grid-cols-3 lg:gap-y-5">
                  {products.slice(20, 26).map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      parentClass="!pl-0"
                      imageClass="h-[190px]"
                      priceClass="text-lg"
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-[calc(100%/3)] border border-stone-300 rounded-lg p-5">
            {/* Top */}
            <div className="flex flex-col gap-y-2">
              <h3 className="text-xl text-stone-600 font-medium text-nowrap ">
                Best Selling
              </h3>
              <div className="flex items-center gap-x-3">
                {/* Border line */}
                <span className="h-1 w-8 rounded-md bg-green-600 block mt-1"></span>
                {/* Horizontal line */}
                <span className="h-[1px] text-stone-400 w-full bg-stone-300 mt-1"></span>
              </div>
            </div>
            {/* Products area */}
            <div className="flex flex-col items-start gap-y-10 mt-12">
              {products.slice(17, 21).map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  parentClass="!flex-row !pl-0 gap-x-4 justify-between"
                  imageClass="h-[65px] w-[100px]"
                  priceClass="text-sm"
                  optionsClass="hidden"
                  categoryClass="hidden"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Discount Offer */}
        <div className="mt-6">
          <Image
            src={topRatedDiscount}
            width={1530}
            height={200}
            alt="discount"
          />
        </div>

      </section>
    </>
  );
};

export default TopRatedSection;
