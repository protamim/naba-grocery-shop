"use client";
import { FaShoppingBasket } from "react-icons/fa";
import ChakraDrawer from "./ChakraDrawer";
import useCart from "@/hooks/useCart";
import { useDisclosure } from "@chakra-ui/react";
import useCartTotal from "@/hooks/useCartTotal";

const FloatCart = () => {
  const {isOpen, onClose, onOpen} = useDisclosure();
  const { cart } = useCart();
  const {total}= useCartTotal();

  return (
    <>
      <div
        onClick={onOpen}
        className="bg-green-600 z-[102] rounded-2xl fixed right-0 top-1/2 p-3 flex flex-col items-center gap-y-2 min-w-20 cursor-pointer"
      >
        <span className="text-2xl text-white">
          <FaShoppingBasket />
        </span>
        <p className="text-white">{cart.length} item</p>
        <p className="bg-slate-200 py-1 px-2 rounded-xl">${total.toFixed(0)}</p>
      </div>

      {/* Chakra Drawer */}
      <ChakraDrawer isOpen={isOpen} onClose={onClose} cart={cart} />
    </>
  );
};

export default FloatCart;
