import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  console.log(cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const clearCart = () => {
    setCart([]);
  };
  const itemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };
  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        clearCart,
        itemsInCart,
        totalCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
