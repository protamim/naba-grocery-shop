import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const IconSocial = ({ children, href }) => {
  return (
    <>
      <Link
        href={href}
        className="relative overflow-hidden w-9 h-9 flex items-center justify-center group bg-slate-200 text-green-700 rounded-full transition-all duration-300 ease-in-out hover:bg-green-200 hover:text-black"
      >
        <span className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-linear group-hover:-top-[128%]">
          {children}
        </span>
        <span className="text-lg absolute top-[128%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-linear group-hover:top-1/2">
          <LiaExternalLinkAltSolid />
        </span>
      </Link>
    </>
  );
};

export default IconSocial;
