"use client";
import Image from "next/image";
import ActionButton from "./ActionButton";
import { rightBaby, rightPremium, trendingLeft } from "@/assets/home";
import MoreButton from "./MoreButton";
import useProducts from "@/hooks/useProducts";
import ProductCard from "./ProductCard";

const TrendingSection = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;


  return (
    <>
      <section className="pb-10 px-4">
        <div className="flex flex-col gap-y-6 lg:gap-x-4 lg:flex-row">

          {/* Left side */}
          <div className="w-full lg:w-[calc(100%/4)]">
            {/* Ads cards with sub heading */}
            <div className="relative overflow-hidden rounded-md">
              <Image
                className="max-h-[353px] lg:min-h-[445px] w-full object-cover object-center rounded-md transition-all ease-in-out duration-300 hover:scale-110"
                src={trendingLeft}
                alt="naba"
                width="100%"
                height="100%"
                priority
              />
              <div className="absolute top-6 left-6">
                <h4 className="text-2xl text-green-600 font-semibold">
                100% Organic Feed Your Family
                </h4>
                <h6 className="text-[0.979rem] text-green-600">
                    Quality Food Daily
                </h6>
                <div className="text-black mt-4">
                  <span className="text-sm">Only</span>
                  <h5 className="text-3xl font-medium -mt-1">$5.99</h5>
                </div>
                <div className="max-w-max mt-4">
                  <ActionButton> Shop Now</ActionButton>
                </div>
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="w-full lg:w-[calc(100%/2)] ">
            {/* Top */}
            <div className="flex items-center gap-x-2 mb-7">
              <h3 className="text-2xl text-black font-medium text-nowrap ">
                Trending Products
              </h3>
              {/* Border line */}
              <span className="h-1 w-8 rounded-md bg-green-600 block mt-1"></span>
              {/* Horizontal line */}
              <span className="h-[1px] text-stone-400 w-full bg-stone-300 mt-1"></span>
              {/* See More */}
              <MoreButton />
            </div>
            {/* Products */}
            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
              {products.slice(30, 33).map((product) => (
                <ProductCard key={product.id} product={product} parentClass='!pl-0' priceClass='!text-lg' />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[calc(100%/4)] h-[445px] flex flex-col gap-y-4">
           {/* Ads cards with sub heading */}
           <div className="relative overflow-hidden rounded-md h-full">
              <Image
                className="h-full w-full object-cover object-center rounded-md transition-all ease-in-out duration-300 hover:scale-110"
                src={rightPremium}
                alt="naba"
                width="100%"
                height="100%"
                priority
              />
              <div className="absolute top-4 left-6">
                <h4 className="text-2xl text-stone-700 font-semibold">
                Premium Mixed
                </h4>
                <h6 className="text-[0.979rem] text-green-600">
                   Salted Nuts
                </h6>
                <div className="text-black mt-4">
                  <span className="text-sm">Only</span>
                  <h5 className="text-3xl font-medium -mt-1">$5.99</h5>
                </div>
                <div className="max-w-max mt-4">
                  <ActionButton> Shop Now</ActionButton>
                </div>
              </div>
            </div>
           {/* Ads cards with sub heading */}
           <div className="relative overflow-hidden rounded-md h-full">
              <Image
                className="min-h-[15.625rem] w-full object-cover object-center rounded-md transition-all ease-in-out duration-300 hover:scale-110"
                src={rightBaby}
                alt="naba"
                width="100%"
                height="100%"
                priority
              />
              <div className="absolute top-4 left-6">
                <h4 className="text-2xl text-stone-700 font-semibold">
                Baby Diaper
                </h4>
                <h6 className="text-[0.979rem] text-green-600">
                    All Fixed Size
                </h6>
                <div className="text-black mt-4">
                  <span className="text-sm">Only</span>
                  <h5 className="text-3xl font-medium -mt-1">$5.99</h5>
                </div>
                <div className="max-w-max mt-4">
                  <ActionButton> Shop Now</ActionButton>
                </div>
              </div>
            </div>


          </div>

        </div>
      </section>
    </>
  );
};

export default TrendingSection;
