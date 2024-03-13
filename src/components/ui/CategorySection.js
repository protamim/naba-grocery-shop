"use client";
import useProducts from "@/hooks/useProducts";
import MoreButton from "./MoreButton";
import Image from "next/image";
import {
  bakery,
  dairy,
  fruits,
  meat,
  offer,
  pasta,
  produce,
  sauces,
  vagetables,
} from "@/assets/home";

const CategorySection = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const getCategory = products?.filter((obj, index, arr) => {
    return arr.findIndex((item) => item.category === obj.category) === index;
  });

  const fruitsLen = products.filter((obj) => obj.category === "Fruits");

  const vegetablesLen = products.filter((obj) => obj.category === "Vegetables");

  const meatLen = products.filter((obj) => obj.category === "Meat & Seafood");

  const dairyLen = products.filter((obj) => obj.category === "Dairy & Eggs");

  const bakeryLen = products.filter((obj) => obj.category === "Bakery");

  const pastaLen = products.filter((obj) => obj.category === "Grains & Pasta");

  const saucesLen = products.filter(
    (obj) => obj.category === "Condiments & Sauces"
  );

  const produceLen = products.filter((obj) => obj.category === "Produce");


  return (
    <>
      <section className="pb-10 px-4">
        <div>
          {/* Top */}
          <div className="flex items-center gap-x-2">
            <h3 className="text-2xl text-black font-medium text-nowrap ">
              Top Categories
            </h3>
            {/* Border line */}
            <span className="h-1 w-8 rounded-md bg-green-600 block mt-1"></span>
            {/* Horizontal line */}
            <span className="h-[1px] text-stone-400 w-full bg-stone-300 mt-1"></span>
            {/* See More */}
            <MoreButton />
          </div>
          {/* Categories */}
          <div className="my-8">
            <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:grid-rows-2 gap-x-4 gap-y-3 lg:[&>*:nth-child(2)]:col-span-3 lg:[&>*:nth-child(2)]:flex-row lg:[&>*:nth-child(2)]:justify-between">
              {/* Category Item */}
              {getCategory.map((obj) => (
                <div
                  key={obj.id}
                  className="bg-slate-100 overflow-hidden px-4 pt-4 flex flex-col gap-y-4 items-center group"
                >
                  {/* category and number of products */}
                  <div className="flex flex-col items-center gap-y-1">
                    <h4 className="text-xl font-medium transition-all duration-300 ease-in-out cursor-pointer hover:text-green-600">
                      {obj.category}
                    </h4>
                    <span className="text-sm text-stone-600">
                      {obj.category === "Fruits"
                        ? fruitsLen.length
                        : obj.category === "Vegetables"
                        ? vegetablesLen.length
                        : obj.category === "Meat & Seafood"
                        ? meatLen.length
                        : obj.category === "Dairy & Eggs"
                        ? dairyLen.length
                        : obj.category === "Bakery"
                        ? bakeryLen.length
                        : obj.category === "Grains & Pasta"
                        ? pastaLen.length
                        : obj.category === "Condiments & Sauces"
                        ? saucesLen.length
                        : obj.category === "Produce"
                        ? produceLen.length
                        : obj.productImage}{" "}
                      Products
                    </span>
                  </div>
                  {/* Category Image */}
                  <div>
                    <Image
                      src={
                        obj.category === "Fruits"
                          ? fruits
                          : obj.category === "Vegetables"
                          ? vagetables
                          : obj.category === "Meat & Seafood"
                          ? meat
                          : obj.category === "Dairy & Eggs"
                          ? dairy
                          : obj.category === "Bakery"
                          ? bakery
                          : obj.category === "Grains & Pasta"
                          ? pasta
                          : obj.category === "Condiments & Sauces"
                          ? sauces
                          : obj.category === "Produce"
                          ? produce
                          : obj.productImage
                      }
                      width={300}
                      height={250}
                      alt="vagetables"
                      className="transition-all duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Discount Offer */}
          <div className="w-full">
            <Image
              src={offer}
              width={1536}
              height={240}
              alt="offer naba store"
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
