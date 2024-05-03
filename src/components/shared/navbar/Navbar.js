"use client";
import DropDownSearchBar from "@/components/ui/DropDownSearchBar";
import IconBadge from "@/components/ui/IconBadge";
import Link from "next/link";
import { MdPhoneInTalk } from "react-icons/md";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import { CiDiscount1 } from "react-icons/ci";
import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const { data: products } = useProducts();
  const { cart } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Filters the categories
  const getCategory = products?.filter((obj, index, arr) => {
    return arr.findIndex((item) => item.category === obj.category) === index;
  });

  return (
    <>
      {/* Navbar */}
      <div className="hidden lg:block">
        <div className="flex gap-x-6 justify-between items-center min-h-20 border-b border-stone-300 px-4">
          {/* Logo */}
          <Link href="/" className="text-3xl text-black">
            Naba
          </Link>
          {/* Hotline */}
          <Link
            href="tel:+971-50-1234567"
            className="flex items-center gap-x-2 transition-all duration-300 hover:text-green-600 min-w-56"
          >
            <span className="border border-stone-300 p-3 rounded-full">
              <MdPhoneInTalk className="text-xl" />
            </span>
            <div className="flex flex-col items-center justify-end">
              <span>Hotline Number</span>
              <span>+971-50-1234567</span>
            </div>
          </Link>

          {/* Search bar */}
          <div className="-mt-3">
            <DropDownSearchBar />
          </div>

          {/* header Icons */}
          <div className="flex gap-x-2 items-center justify-end">
            {/* account */}
            <div className="pr-3">
              <Link
                href="/login"
                className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:text-green-600"
              >
                <span className="border border-stone-400 p-2 rounded-full">
                  <CiUser className="text-xl" />
                </span>
                <h5 className="text-lg font-light">Account</h5>
              </Link>
            </div>
            <hr className="w-[1px] h-5 bg-stone-400" />
            {/* Icons */}
            <div className="flex gap-x-5 items-center ml-3">
              <IconBadge icon={<CiShoppingCart />} text={cart.length} cart={cart} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
              <IconBadge icon={<CiHeart />} text="0" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sticky top-0 hidden lg:block drop-shadow-sm z-[99]">
        <div className="relative">
          <div className="bg-white px-4 flex items-center justify-between min-h-16">
            {/* categories button */}
            <div className="relative flex items-center gap-x-2 group/category border border-stone-300 rounded-full px-6 py-2 hover:cursor-pointer ">
              <HiMiniBars3CenterLeft className="text-xl" />
              <h5>All Categories</h5>
              <SlArrowDown className="text-sm ml-2" />
              {/* Dropdown Categories */}
              <ul className="group-hover/category:scale-y-100 scale-y-0 origin-top absolute left-0 top-[115%] bg-white shadow-md min-w-48 divide-y-[1px] divide-stone-300 transition-all duration-300">
                {getCategory?.map((item) => (
                  <li key={item.id}>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      {item.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NAV ITEMS */}
            <ul className="flex items-center gap-x-6">
              {/* Home Link */}
              <li className="relative group/dropdown">
                <Link href="#" className="flex items-center gap-x-2 text-lg">
                  Home
                  <SlArrowDown className="text-xs font-bold text-green-600" />
                </Link>
                {/* Dropdown menu */}
                <ul className="group-hover/dropdown:scale-y-100 scale-y-0 origin-top absolute left-0 top-[140%] bg-white shadow-inner min-w-48 transition-all duration-300">
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Home 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Home 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Home 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Home 4
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Page Link */}
              <li className="relative group/dropdown">
                <Link href="#" className="flex items-center gap-x-2 text-lg">
                  Pages
                  <SlArrowDown className="text-xs font-bold text-green-600" />
                </Link>
                {/* Dropdown menu */}
                <ul className="group-hover/dropdown:scale-y-100 scale-y-0 origin-top absolute left-0 top-[140%] bg-white shadow-inner min-w-48 transition-all duration-300">
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Team Archive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Team Single
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Daily Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Special Offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Faq Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      404 page
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Shop Link */}
              <li className="group/dropdown overflow-hidden">
                <Link href="#" className="flex items-center gap-x-2 text-lg">
                  Shop
                  <SlArrowDown className="text-xs font-bold text-green-600" />
                </Link>
                {/* DropDown Content */}
                <div className="overflow-hidden group-hover/dropdown:scale-y-100 scale-y-0 origin-top absolute left-0 top-[100%] bg-white shadow-stone-50 shadow-inner w-screen max-w-screen-2xl transition-all duration-300 flex items-start justify-between px-5 py-4">
                  {/* Shop Layout */}
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Shop Layout</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Default
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 3
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 4
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 5
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 6
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Shop Layout */}
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Shop Layout</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 7
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 8
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 9
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 10
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 11
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 12
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 13
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Shop Ajax */}
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Shop Ajaxs</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Ajax Filter Shop Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Ajax Filter Accordion
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Ajax Filter Grid Tab
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Ajax Load More
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Ajax Load Auto Scroll
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 12
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Grid Layout 13
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Single Product */}
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Single Product</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Product Default
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Product Thumb Left
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Product Thumb Right
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Product Thumb Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Product Thumb List
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Shop Category
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Product Detail
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Others Pages */}
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Others Pages</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Cart Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Checkout Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Compare Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Login/Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Vendor Link */}
              <li className="relative group/dropdown">
                <Link href="#" className="flex items-center gap-x-2 text-lg">
                  Vendor
                  <SlArrowDown className="text-xs font-bold text-green-600" />
                </Link>
                {/* Dropdown menu */}
                <ul className="group-hover/dropdown:scale-y-100 scale-y-0 origin-top absolute left-0 top-[140%] bg-white shadow-inner min-w-48 transition-all duration-300">
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Store List
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Vendor Detail
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Daily Deals
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Elements Link */}
              <li className="relative group/dropdown">
                <Link href="#" className="flex items-center gap-x-2 text-lg">
                  Elements
                  <SlArrowDown className="text-xs font-bold text-green-600" />
                </Link>
                {/* DropDown Content */}
                <div className="group-hover/dropdown:scale-y-100 scale-y-0 origin-top absolute left-0 top-[140%] bg-white shadow-inner w-[30rem] transition-all duration-300 flex items-start justify-between px-5 py-4">
                  {/* Column 1 */}
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Column 1</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Section Title
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Button
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Video
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Info Box
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Accordion
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Countdown
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Contact Info
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Column 2 */}
                  <div className="w-full">
                    <h5 className="text-lg font-medium mb-4">Column 2</h5>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Category
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Logo Slider
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Testimonial
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Team Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Team Slider
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Post Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className=" block transition-all duration-300  hover:pl-3 hover:text-green-600"
                        >
                          Post Slider
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Blog Link */}
              <li className="relative group/dropdown">
                <Link href="#" className="flex items-center gap-x-2 text-lg">
                  Blog
                  <SlArrowDown className="text-xs font-bold text-green-600" />
                </Link>
                {/* Dropdown menu */}
                <ul className="group-hover/dropdown:scale-y-100 scale-y-0 origin-top absolute left-0 top-[140%] bg-white shadow-inner min-w-48 transition-all duration-300">
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Blog Grid
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Blog List
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Blog Standard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Blog Archive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Author Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Single Standard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Single Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="py-2 pl-2 block transition-all duration-300 hover:bg-stone-100 hover:pl-4"
                    >
                      Single Video
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Contact Link */}
              <li>
                <Link href="#" className="text-lg">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Discount */}
            <div className="flex items-center gap-x-3">
              <span className="text-green-700 text-2xl">
                <CiDiscount1 />
              </span>
              <span className="font-medium text-lg">Weekly Discount!!</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
