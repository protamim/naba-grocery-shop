"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import BlogCard from "./BlogCard";
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from "@/assets/home";

const BlogSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: "auto",
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

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

  return (
    <>
      <section className="py-10 px-4 bg-slate-100">
        <div className="relative">
          {/* Top */}
          <div className="flex items-center gap-x-2">
            <h3 className="text-2xl text-black font-medium text-nowrap ">
              Latest News & Blog
            </h3>
            {/* Border line */}
            <span className="h-1 w-8 rounded-md bg-green-600 block mt-1"></span>
            {/* Horizontal line */}
            <span className="h-[1px] text-stone-400 w-full bg-stone-300 mt-1"></span>
            {/* Navigation Butons */}
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
          {/* Blog area */}
          <div className="py-6">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {/* Blog card */}
                <BlogCard
                  image={blog1}
                  title="Awaken Your Senses With Our Fusion Cuisine"
                  category="Meat and Seafood"
                  desc="When an unknown printer took a galley of type and scrambled lorem."
                  pubDate="17.02.2024"
                  numOfComment="2"
                />
                <BlogCard 
                image={blog2}
                title='Indulge In Culinary Adventure With Our Tasting Menu'
                category='Vegetables'
                desc='When an unknown printer took a galley of type and scrambled lorem.'
                pubDate='14.02.2024'
                numOfComment='20'
                />
                <BlogCard 
                image={blog3}
                title='Celebrate The Flavors Season With Our Rotating Menu'
                category='Vegetables'
                desc='When an unknown printer took a galley of type and scrambled lorem.'
                pubDate='08.02.2024'
                numOfComment='9'
                />
                <BlogCard 
                image={blog4}
                title='Satisfy Your Sweet Tooth With Our Dessert Creations'
                category='Fruits'
                desc='When an unknown printer took a galley of type and scrambled lorem.'
                pubDate='04.02.2024'
                numOfComment='4'
                />
                <BlogCard 
                image={blog5}
                title='Discover The Allure Of Our Vegetarian Menu Options'
                category='Vegetables'
                desc='When an unknown printer took a galley of type and scrambled lorem.'
                pubDate='02.02.2024'
                numOfComment='15'
                />
                <BlogCard 
                image={blog6}
                title='Dive Into The Bold Flavors Of Our Grilled Meats'
                category='Bakery'
                desc='When an unknown printer took a galley of type and scrambled lorem.'
                pubDate='01.02.2024'
                numOfComment='21'
                />
                <BlogCard 
                image={blog7}
                title='Discover The Secrets Of Our House-made Pasta'
                category='Grains & Pasta'
                desc='When an unknown printer took a galley of type and scrambled lorem.'
                pubDate='29.01.2024'
                numOfComment='11'
                />
                <BlogCard 
                image={blog8}
                title='Experience The Essence Of Traditional Cuisine'
                category='Fruits'
                desc='When an unknown printer took a galley of type and scrambled lorem.'
                pubDate='22.01.2024'
                numOfComment='12'
                />
                {/* Blog card end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
