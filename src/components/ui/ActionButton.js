import Link from "next/link";

const ActionButton = ({children}) => {
  return (
    <>
      <Link
        className="relative min-w-36 h-10 bg-green-500 rounded-full block text-lg text-white transition-all duration-300 before:bg-green-600 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-all before:ease-in before:duration-300 before:origin-center"
        href="#"
      >
        <button className="absolute w-full h-full top-0 left-0">
          {children}
        </button>
      </Link>
    </>
  );
};

export default ActionButton;
