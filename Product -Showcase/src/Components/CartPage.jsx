
import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, onRemoveItem,onClearCart }) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex justify-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600 underline">Shop now</Link>.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => onRemoveItem(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>



          ))}

       <p className="text-lg font-semibold mt-6">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={onClearCart}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
