"use client";
import Link from "next/link";
import { useState } from "react";
import SlideNav from "./SlideNav";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const MobNav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <>
      <nav className="bg-slate-100 relative lg:hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl">
              <span>Naba</span>
            </Link>
            <HeaderIcons handleToggle={handleToggle} toggle={toggle} />
          </div>
        </div>
        <SlideNav toggle={toggle} />
      </nav>
    </>
  );
};

export default MobNav;

const HeaderIcons = ({ handleToggle, toggle }) => {
  return (
    <>
      <div className="flex items-center gap-x-5 text-2xl">
        <NavIcon icon={<CiSearch />} />
        <NavIcon icon={<FiUser />} />
        <NavIcon icon={<RiShoppingBasketFill />} />
        <NavIcon icon={<BsHeart />} />
        {toggle ? (
          <NavIcon
            handleToggle={handleToggle}
            icon={<RxCross1 />}
            className="text-3xl duration-300 transition-all"
          />
        ) : (
          <NavIcon
            handleToggle={handleToggle}
            className="text-3xl duration-300 transition-all"
            icon={<HiOutlineBars3CenterLeft />}
          />
        )}
      </div>
    </>
  );
};

const NavIcon = ({ icon, className = "", handleToggle }) => {
  return (
    <span
      onClick={handleToggle}
      className={`cursor-pointer hover:opacity-60 text-black ${className}`}
    >
      {icon}
    </span>
  );
};
