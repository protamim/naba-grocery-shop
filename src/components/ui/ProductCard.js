import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const {
    productImage,
    productName,
    category,
    price,
    rating,
    discountPercent,
  } = product;

  return (
    <>
      <div className="flex flex-col gap-y-4 flex-grow-0 flex-shrink-0 basis-full pl-4 sm:basis-[calc(100%/2)] md:basis-[calc(100%/3)] lg:basis-[calc(100%/4)] xl:basis-[calc(100%/5)] 2xl:basis-[calc(100%/6)]">
        <div className="overflow-hidden relative rounded-md">
          <Image
            src={productImage}
            alt="naba"
            width={250}
            height={200}
            priority
            className="w-full h-60 object-cover object-center rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          />
          {/* category */}
          <h5 className="absolute left-2 top-2 text-stone-400 font-normal retro-text text-sm cursor-pointer transition-all duration-300 ease-in-out hover:text-green-600">
            {category}
          </h5>
          {/* Option Icons */}
          <div className="absolute right-2 top-3 flex flex-col items-center gap-y-2">
            <Tooltip
              label="Add to wishlist"
              placement="left"
              hasArrow
              bg="#1B8057"
              borderRadius="0.24rem"
            >
              <span className="text-green-700 bg-white rounded-md cursor-pointer p-2 transition-all ease-in-out duration-300 hover:bg-green-700 hover:text-white">
                <BsHeart />
              </span>
            </Tooltip>

            <Tooltip
              label="Select Options"
              placement="left"
              hasArrow
              bg="#1B8057"
              borderRadius="0.24rem"
            >
              <span className="text-green-700 bg-white rounded-md cursor-pointer p-2 transition-all ease-in-out duration-300 hover:bg-green-700 hover:text-white">
                <BsCart />
              </span>
            </Tooltip>

            <Tooltip
              label="Compare"
              placement="left"
              hasArrow
              bg="#1B8057"
              borderRadius="0.24rem"
            >
              <span className="text-green-700 bg-white rounded-md cursor-pointer p-2 transition-all ease-in-out duration-300 hover:bg-green-700 hover:text-white">
                <ImLoop2 />
              </span>
            </Tooltip>

            <Tooltip
              label="Quick View"
              placement="left"
              hasArrow
              bg="#1B8057"
              borderRadius="0.24rem"
            >
              <span className="text-green-700 bg-white rounded-md cursor-pointer p-2 transition-all ease-in-out duration-300 hover:bg-green-700 hover:text-white">
                <BsSearch />
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="space-y-1">
          <h4 className="text-stone-800 text-base">{productName}</h4>
          {/* Ratings */}
          <div className="flex gap-x-3 items-center">
            <ReactStars
              count={5}
              size={20}
              value={rating}
              edit={false}
              activeColor="#F8C519"
            />
            <h6 className="text-stone-500">({rating})</h6>
          </div>
          {/* Price */}
          <div className="flex items-center gap-x-2 text-2xl text-stone-700 font-medium">
            <h4 className="">${price}</h4>-<h4>${price - (price / 100 * discountPercent)}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
