"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const NavigationSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} className="text-center">
        <SwiperSlide>
          <div className="flex gap-x-3 items-center justify-center">
            <h5 className="text-white text-2xl">Try Nava for free</h5>
            <Link className="text-yellow-300 font-light" href="#">
              Open store right now
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-x-3 items-center justify-center">
            <h5 className="text-white text-2xl">Save 20-50% Sitewide!!!</h5>
            <Link className="text-yellow-300 font-light" href="#">
            Click And Copy Code:
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-x-3 items-center justify-center">
            <h5 className="text-white text-2xl">Save 10-20% Sitewide!!!</h5>
            <Link className="text-yellow-300 font-light" href="#">
            Click And Copy Code:
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default NavigationSlider;
