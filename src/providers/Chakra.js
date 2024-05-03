"use client";
import useProducts from "@/hooks/useProducts";
import { ChakraProvider } from "@chakra-ui/react";

export function Chakra({ children }) {
  const { isLoading } = useProducts();
  if (isLoading) {
    return (
      <p className="h-screen w-full flex items-center justify-center text-2xl text-green-500">
        Loading...
      </p>
    );
  }
  return <ChakraProvider>{children}</ChakraProvider>;
}
