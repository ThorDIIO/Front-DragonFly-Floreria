import { createContext, useContext, useState } from "react";

interface CartContextProps {
  cart: any;
  addToCart: (item: any) => void;
  removeFromCart: (itemId: any) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState([] as any);

  const addToCart = (item: any) => {
    setCart((prevCart: any) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: any) => {
    setCart((prevCart: any) =>
      prevCart.filter((item: any) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
