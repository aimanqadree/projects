import { create } from "zustand";
export const useProductStore = create((set, get) => ({
  cartItems: [],
  wishlist: [],
  message: "",

  setCartItems: (items) => set({ cartItems: items }),
  setWishlist: (items) => set({ wishlist: items }),
  setMessage: (message) => set({ message }),

  handleAddToCart: (product) => {
    const { cartItems, setCartItems, setMessage } = get();
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setMessage(`${product.name} added to cart ✅`);
    setTimeout(() => setMessage(""), 2000);
  },

  handleRemoveFromCart: (index) => {
    const { cartItems, setCartItems } = get();
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  },

  handleQuantityChange: (id, newQuantity) => {
    const { cartItems, setCartItems } = get();
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  },

  handleToggleWishlist: (product) => {
    const { wishlist, setWishlist, setMessage } = get();
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      setMessage(`${product.name} removed from wishlist ❌`);
    } else {
      setWishlist([...wishlist, product]);
      setMessage(`${product.name} added to wishlist ❤️`);
    }
    setTimeout(() => setMessage(""), 2000);
  },
  
  handleClearCart : () => {
    const { setCartItems } = get();
    setCartItems([]);
  }
}));
