
import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {

  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-evenly">
    <div
      className={`bg-white p-4 rounded shadow transition-transform ${
        hovered ? "scale-105 shadow-xl" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-60 h-60 object-cover rounded mb-3"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>

      <button
        onClick={() => onAddToCart(product.name)}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
    </div>
  );
};

export default ProductCard;
