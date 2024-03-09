import NavigationSlider from "@/components/ui/NavigationSlider";
import { CiLocationOn } from "react-icons/ci";

import './topbar.css'
import { BsEnvelope } from "react-icons/bs";
import Link from "next/link";

const TopBar = () => {
  return (
    <>
      <div className="hidden lg:flex bg-green-700 justify-between items-center px-4 min-h-10">
        {/* Left column */}
        <div className="flex gap-x-4 items-center text-white">
          <div className="flex gap-x-1 items-center">
            <span>
              <CiLocationOn />
            </span>
            <h5>23/A Mark Street Road, Newyork City</h5>
          </div>
          <div className="flex gap-x-2 items-center">
            <span>
              <BsEnvelope />
            </span>
            <Link className="transition-all duration-300 hover:text-stone-300" href='mailto:admin@navaAi.com'>admin@navaAi.com</Link>
          </div>
        </div>
        {/* Right column */}
        <div className="w-[50%]">
           <NavigationSlider />
        </div>
      </div>
    </>
  );
};

export default TopBar;
