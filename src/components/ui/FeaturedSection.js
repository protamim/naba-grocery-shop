"use client";
import useProducts from "@/app/hooks/useProducts";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "./ProductCard";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const FeaturedSection = () => {
  const { data: products, isLoading, error } = useProducts();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, slidesToScroll: 'auto', align: 'start', });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error occoured!!</h2>;
  // console.log(products);

  return (
    <>
      <section className="py-10 px-4">
        <div className="relative">
          {/* Top */}
          <div className="flex items-center gap-x-2">
            <h3 className="text-2xl text-black font-medium text-nowrap ">
              Featured Products
            </h3>
            {/* Border line */}
            <span className="h-1 w-8 rounded-md bg-green-600 block mt-1"></span>
            {/* Horizontal line */}
            <span className="h-[1px] text-stone-400 w-full bg-stone-300 mt-1"></span>
            <div className="flex items-center gap-x-3">
              <span
                onClick={scrollPrev}
                className="border border-stone-300 p-2 flex items-center rounded-md cursor-pointer transition-all ease-in-out duration-300 hover:opacity-65"
              >
                <MdKeyboardArrowLeft className="flex items-center  text-2xl" />
              </span>
              <span
                onClick={scrollNext}
                className="border border-stone-300 p-2 flex items-center rounded-md cursor-pointer transition-all ease-in-out duration-300 hover:opacity-65"
              >
                <MdKeyboardArrowRight className="flex items-center  text-2xl" />
              </span>
            </div>
          </div>
          {/* Products area */}
          <div className="py-6">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {/* Product card */}
                {products.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
