import useProducts from "./useProducts";
import { getShoppingCart } from "@/utils/localStorage";

const useCart = () => {
  const { data } = useProducts();
  const shoppingCart = getShoppingCart();

  // Filter out the cart products
  const cart = data.filter((product) => shoppingCart.includes(product.id));

  return { cart };
};

export default useCart;
