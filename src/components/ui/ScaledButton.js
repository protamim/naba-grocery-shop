import Link from "next/link";

const ScaledButton = ({ children, href }) => {
  return (
    <>
      <Link
        href={href}
        className="relative text-stone-200 block py-1 rounded-md transition-all ease-in-out duration-300 hover:text-black hover:px-2 z-20 before:transition-all before:duration-300 before:ease-linear before:absolute before:bg-purple-200 before:w-full before:h-full before:top-0 before:left-0 before:-z-10 before:rounded-md before:scale-0 before:origin-left hover:before:scale-100"
      >
        {children}
      </Link>
    </>
  );
};

export default ScaledButton;
