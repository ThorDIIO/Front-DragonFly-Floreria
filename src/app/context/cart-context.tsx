import { createContext, useContext, useState } from "react";

interface CartItem {
  id: any;
  quantity: number;
  [key: string]: any;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (itemId: any, quantity: number) => void; // Agregar esta función
  removeFromCart: (itemId: any) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  updateQuantity: () => {}, // Función vacía por defecto
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState([] as CartItem[]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart: CartItem[]) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        const newQuantity = (existingItem.quantity || 0) + (item.quantity || 1);
        updatedCart[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  // Nueva función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (itemId: any, quantity: number) => {
    setCart((prevCart: CartItem[]) =>
      prevCart.map((item: CartItem) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (itemId: any) => {
    setCart((prevCart: CartItem[]) =>
      prevCart.filter((item: CartItem) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }} // Añadir updateQuantity al value
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
