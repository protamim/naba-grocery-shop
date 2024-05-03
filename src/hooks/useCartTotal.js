import useCart from "./useCart";

const useCartTotal = () => {
  const { cart } = useCart();
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }

  return { total };
};

export default useCartTotal;
