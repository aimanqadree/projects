
import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import products from "./data/product";
import { Routes, Route, Link } from "react-router-dom";
import CartPage from "./Components/CartPage";
import WishlistPage from "./Components/WishlistPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setMessage(`${product.name} added to cart ✅`);
    setTimeout(() => setMessage(""), 2000);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      setMessage(`${product.name} removed from wishlist ❌`);
    } else {
      setWishlist([...wishlist, product]);
      setMessage(`${product.name} added to wishlist ❤️`);
    }
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="max-w-[1690px] mx-auto rounded flex justify-between items-center sticky top-0 z-50 bg-white shadow h-20 px-4 md:px-8">
        <h1 className="md:text-3xl font-bold">
          <Link to="/">Product Showcase</Link>
        </h1>
        <div className="flex gap-2 md:gap-6 text-xl">
          <Link
            to="/wishlist"
            className="relative text-[12px] sm:text-sm font-semibold md:font-medium md:text-xl after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-700 hover:after:scale-x-105"
          >
            ❤️ Wishlist: {wishlist.length}
          </Link>
          <Link
            to="/cart"
            className="relative text-[12px] sm:text-sm font-semibold md:font-medium md:text-xl after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-700 hover:after:scale-x-105"
          >
            🛒 Cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </Link>
        </div>
      </header>

      <div className="p-6 py- overflow-hidden">
        {message && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 p-2 bg-green-100 border border-green-400 text-green-700 rounded shadow-md z-40 max-w-[100%] w-full md:max-w-[1690px] text-center mb-14">
            {message}
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-wrap justify-center gap-7 px-14 mt-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product)}
                    onToggleWishlist={() => handleToggleWishlist(product)}
                    isInWishlist={wishlist.some((item) => item.id === product.id)}
                  />
                ))}
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onRemoveItem={handleRemoveFromCart}
                onClearCart={handleClearCart}
                onQuantityChange={handleQuantityChange}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <WishlistPage
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;