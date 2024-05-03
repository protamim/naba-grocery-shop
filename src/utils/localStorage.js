const getShoppingCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = [];
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const addProductToLS = (productId) => {
  // Get the returned Array
  const storedCart = getShoppingCart();
 // If not includes then PUSH it
  if(!storedCart.includes(productId)){
    storedCart.push(productId);
  }
   // set to LS
  localStorage.setItem("cart", JSON.stringify(storedCart));
};


export { getShoppingCart, addProductToLS };
