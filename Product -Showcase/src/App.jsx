
import React, { useState } from "react";
import ProductCard from "./Components/ProductCard";
import products from "./data/product";
import { Routes, Route, Link } from "react-router-dom";
import CartPage from "./Components/CartPage";


const App = () => {
  
  const [cartItems, setCartItems] = useState([]);

  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setMessage(`${product.name} added to cart ✅`);

    setTimeout(() => setMessage(""), 2000);
  };
  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); 
    setCartItems(updatedCart);
  };
  const handleClearCart = () => {
    setCartItems([]);
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <header className="flex justify-between items-center mb-6 sticky top-0 bg-gray-950 text-white h-20 ">
        <h1 className="text-3xl font-bold">Product Showcase
        <Link to="/"></Link>
        </h1>
        <div className="text-xl">
        <Link to="/cart" className="text-xl font-medium hover:underline">
            🛒 Cart: {cartItems.length}
          </Link>
        </div>
      </header>

      {message && (
        <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}


<Routes>
        <Route
          path="/"
          element={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

