import { useState } from "react";
import ProductCard from "./Components/ProductCard";
import products from "./data/product";
import { Routes, Route, Link } from "react-router-dom";
import CartPage from "./Components/CartPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
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
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="max-w-[1690px] mx-auto rounded flex justify-between items-center sticky top-0 z-50 bg-white shadow h-20 px-8 ">
        <h1 className="text-3xl font-bold">
          <Link to="/">Product Showcase</Link>
        </h1>
        <div className="text-3xl">
          <Link to="/cart" className="relative text-xl font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-700 hover:after:scale-x-105">
            🛒 Cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </Link>
        </div>
      </header>

      <div className="p-6">
        {message && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 p-2 bg-green-100 border border-green-400 text-green-700 rounded shadow-md z-40 max-w-[100%] w-full md:max-w-[1690px] text-center">
            {message}
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6 px-14 ">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => handleAddToCart(product)}
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
        </Routes>
      </div>
    </div>
  );
};

export default App;
