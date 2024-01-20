import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  console.log(cart)

  const addToCart = (item) => {
    setCart([...cart,item])
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }
  const clearCart = () => {
    setCart([])
  }
  const itemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            clearCart,
            itemsInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}