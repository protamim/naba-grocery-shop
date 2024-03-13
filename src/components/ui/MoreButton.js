import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const MoreButton = () => {
  return (
    <>
      <button className="flex items-center gap-x-1 border border-stone-300 font-medium px-2 py-1 rounded-sm transition-all duration-300 ease-in-out hover:border-green-600 hover:bg-green-600 text-stone-700 hover:text-white">
        <Link href="#" className="text-sm text-nowrap">
          See More
        </Link>
        <MdKeyboardArrowRight />
      </button>
    </>
  );
};

export default MoreButton;
