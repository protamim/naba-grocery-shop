'use client';
import { getShoppingCart } from "@/utils/localStorage";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from "@chakra-ui/react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";

const ChakraDrawer = ({onClose, isOpen, cart}) => {
  const shoppingCart = getShoppingCart();
  
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody mt="1.4rem">
            {shoppingCart.length <= 0 ? (
              <p>No products in the cart.</p>
            ) : (
              <div className="flex flex-col items-center gap-y-6">
                {cart?.map((item) => (
                  <>
                    <div key={item.id} className="flex items-center gap-x-4">
                      <Image
                        src={item.productImage}
                        width={64}
                        height={70}
                        alt={item.productName}
                        className="h-16 w-[64px]"
                      />
                      <h5>{item.productName}</h5>
                      <div className="flex flex-col gap-y-2 items-end">
                        <p>${item.price}</p>
                        <button className="text-xl opacity-70 transition-all ease-in-out duration-300 hover:opacity-100">
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </div>
                    <Divider />
                  </>
                ))}
              </div>
            )}
          </DrawerBody>

          <DrawerFooter flexDirection="column" rowGap="1rem">
            <Button colorScheme="blue" w="100%">
              Continue Shopping
            </Button>
            <Button variant="outline" w="100%">
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChakraDrawer;
