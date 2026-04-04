import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}