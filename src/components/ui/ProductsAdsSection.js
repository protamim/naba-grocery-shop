import { ads1, ads2, ads3 } from "@/assets/home";
import Image from "next/image";
import ActionButton from "./ActionButton";

const ProductsAdsSection = () => {
  return (
    <>
      <section className="py-12">
        <div className="grid items-center justify-center px-4 gap-y-6 grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-3 lg:gap-y-0">
          {/* Ads card */}
          <div className="relative overflow-hidden rounded-md">
            <Image
              className="min-h-[15.625rem] w-full object-cover object-center rounded-md transition-all ease-in-out duration-300 hover:scale-110"
              src={ads1}
              alt="naba"
              width="100%"
              height="100%"
              priority
            />
            <div className="absolute top-1/2 left-6 -translate-y-1/2 space-y-4">
              <h4 className="text-2xl text-white font-medium underline">
                Creamy Fruits baby Jem
              </h4>
              <div className="text-white">
                <span className="text-sm">Only</span>
                <h5 className="text-3xl font-medium -mt-1">$12.99</h5>
              </div>
              <div className="max-w-max">
                <ActionButton> Shop Now</ActionButton>
              </div>
            </div>
          </div>
          {/* Ads cards with sub heading */}
          <div className="relative overflow-hidden rounded-md">
            <Image
              className="min-h-[15.625rem] w-full object-cover object-center rounded-md transition-all ease-in-out duration-300 hover:scale-110"
              src={ads2}
              alt="naba"
              width="100%"
              height="100%"
              priority
            />
            <div className="absolute top-1/2 left-6 -translate-y-1/2">
              <h4 className="text-2xl text-white font-semibold">
                Handwash
              </h4>
              <h6 className="text-[0.979rem] text-white">Hand Cleaning Wash</h6>
              <div className="text-white mt-4">
                <span className="text-sm">Only</span>
                <h5 className="text-3xl font-medium -mt-1">$5.99</h5>
              </div>
              <div className="max-w-max mt-4">
                <ActionButton> Shop Now</ActionButton>
              </div>
            </div>
          </div>
          {/* Ads card with sub heading right align */}
          <div className="relative overflow-hidden rounded-md">
            <Image
              className="min-h-[15.625rem] w-full object-cover object-center rounded-md transition-all ease-in-out duration-300 hover:scale-110"
              src={ads3}
              alt="naba"
              width="100%"
              height="100%"
              priority
            />
            <div className="absolute top-1/2 right-6 -translate-y-1/2">
              <h4 className="text-2xl text-black font-semibold">
              Organic Fruits
              </h4>
              <h6 className="text-[0.979rem] text-black">100% Organic</h6>
              <div className="text-black mt-4">
                <span className="text-sm">Only</span>
                <h5 className="text-3xl font-medium -mt-1">$14.99</h5>
              </div>
              <div className="max-w-max mt-4">
                <ActionButton> Shop Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsAdsSection;
