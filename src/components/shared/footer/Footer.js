'use client';
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { playStore, appleStore } from "@/assets/home";
import { MdOutlineArrowOutward } from "react-icons/md";
import ScaledButton from "@/components/ui/ScaledButton";
import {
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { GrBitcoin } from "react-icons/gr";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import IconSocial from "@/components/ui/IconSocial";
import moment from "moment";

const Footer = () => {
  return (
    <>
      <footer className="px-4 pb-2 pt-8 bg-green-800 text-stone-200">
        <div className="grid py-6 grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 lg:gap-x-4 lg:grid-cols-5 xl:gap-x-7">
          {/* Website About */}
          <div className="flex flex-col items-start gap-y-5">
            {/* Logo */}
            <Link href="#" className="text-4xl font-medium text-white">
              Naba
            </Link>
            {/* Site Slogan */}
            <p className="text-base font-normal max-w-sm">
              When an unknown printer took a galley of type scrambled it to make
              a type specimen book.
            </p>
            {/* Address and contact info */}
            <div className="flex flex-col items-start gap-y-3">
              {/* Address */}
              <div className="flex items-center gap-x-3">
                <span className="text-2xl font-medium">
                  <IoLocationOutline />
                </span>
                <h6>23/A Road, Riyad City</h6>
              </div>
              {/* Contact */}
              <div className="flex items-center gap-x-3">
                <span className="text-2xl font-medium">
                  <LuPhoneCall />
                </span>
                <Link
                  href="tel:+971-50-1234567"
                  className="transition-all duration-300 ease-in-out hover:text-pink-300"
                >
                  +971-50-1234567
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-x-3 gap-y-5 flex-wrap">
              <IconSocial href="#">
                <FaFacebookF />
              </IconSocial>
              <IconSocial href="#">
                <FaTwitter />
              </IconSocial>
              <IconSocial href="#">
                <FaPinterestP />
              </IconSocial>
              <IconSocial href="#">
                <FaInstagram />
              </IconSocial>
              <IconSocial href="#">
                <FaTiktok />
              </IconSocial>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start gap-y-6">
            {/* Title */}
            <h5 className="text-xl font-medium text-stone-100">Quick Links</h5>
            {/* Link Items */}
            <ul className="flex flex-col items-start gap-y-2">
              <li className="w-full">
                <ScaledButton href="#">Shop</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">About US</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Contact US</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Special Offers</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#"> Weekly Ad</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Accessibility Statement</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#"> Gift Cards</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Store Locator</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Wholesale Inquiries</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Bulk Orders</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Product Reviews</ScaledButton>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="flex flex-col items-start gap-y-6">
            {/* Title */}
            <h5 className="text-xl font-medium text-stone-100">Account</h5>
            {/* Link Items */}
            <ul className="flex flex-col items-start gap-y-2">
              <li className="w-full">
                <ScaledButton href="#">Dashboard</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Orders</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">My Cart</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Order details</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Thank You</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Login Register</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Loyalty Points</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Notifications</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Preferences</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Refer a Friend</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Account Settings</ScaledButton>
              </li>
            </ul>
          </div>

          {/* Privacy Policy */}
          <div className="flex flex-col items-start gap-y-6">
            {/* Title */}
            <h5 className="text-xl font-medium text-stone-100">
              Privacy Policy
            </h5>
            {/* Link Items */}
            <ul className="flex flex-col items-start gap-y-2">
              <li className="w-full">
                <ScaledButton href="#">Returns and exchange</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Payment terms</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Delivery terms</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Payment and pricing</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Terms of use</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Privacy Policy</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Loyalty Points</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Notifications</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Preferences</ScaledButton>
              </li>
              <li className="w-full">
                <ScaledButton href="#">Refer a Friend</ScaledButton>
              </li>
            </ul>
          </div>

          {/* Sign Up Newsletter */}
          <div className="flex flex-col items-start gap-y-6">
            {/* Title */}
            <h5 className="text-xl font-medium text-stone-100">
              Sign Up Newsletter
            </h5>
            <p className="max-w-72">When an unknown printer took a galley of type and scrambled</p>
            {/* Sign Up */}
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="outline-none border-none py-3 text-black pl-2 pr-3 text-sm rounded-md"
                  required
                />
                <button className="bg-yellow-400 p-3 text-black text-xl font-light -ml-2 rounded-r-md transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-stone-600">
                  <MdOutlineArrowOutward />
                </button>
              </div>
            </form>
            {/* Mobile App */}
            <p className="max-w-72">
              <strong className="">Download App on Mobile :</strong> 15%
              discount on your first purchase
            </p>
            {/* Icons */}
            <div className="flex flex-col gap-y-2">
              <Image
                src={playStore}
                width={320}
                height={114}
                alt="playstore"
                className="w-32 rounded-md"
              />
              <Image
                src={appleStore}
                width={320}
                height={114}
                alt="playstore"
                className="w-32 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between flex-wrap gap-y-5 py-4 border-t border-stone-300">
          {/* Copyright */}
          <p>
            &copy; {moment().format('YYYY')} Naba. All Right Reserved by Naba.
          </p>
          {/* Payment support */}
          <div className="flex items-center gap-x-6 text-4xl">
            <span className="cursor-pointer transition-all duration-300 ease-in-out origin-right hover:scale-110 hover:rotate-12">
              <GrBitcoin />
            </span>
            <span className="cursor-pointer transition-all duration-300 ease-in-out origin-right hover:scale-110 hover:rotate-12">
              <SiAmericanexpress />
            </span>
            <span className="cursor-pointer transition-all duration-300 ease-in-out origin-right hover:scale-110 hover:rotate-12">
              <FaCcPaypal />
            </span>
            <span className="cursor-pointer transition-all duration-300 ease-in-out origin-right hover:scale-110 hover:rotate-12">
              <FaCcMastercard />
            </span>
            <span className="cursor-pointer transition-all duration-300 ease-in-out origin-right hover:scale-110 hover:rotate-12">
              <FaCcVisa />
            </span>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;
