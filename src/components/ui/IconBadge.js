import ChakraDrawer from "./ChakraDrawer";

const IconBadge = ({ icon, text, isOpen, onClose, cart, onOpen}) => {
 
  return (
    <>
      <span
        onClick={onOpen}
        className="relative text-3xl text-black transition-all duration-300 hover:text-green-600 hover:cursor-pointer group"
      >
        {icon}
        <span className="bg-yellow-500 text-sm rounded-full min-h-5 min-w-5 absolute flex items-center justify-center -top-2 left-[15px] transition-all duration-300 group-hover:text-white">
          {text}
        </span>
      </span>

      {/* Drawer */}
      <ChakraDrawer isOpen={isOpen} onClose={onClose} cart={cart} />
    </>
  );
};

export default IconBadge;
