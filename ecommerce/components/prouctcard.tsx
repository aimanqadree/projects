"use client";
import { useCart } from "../context/cartcontext";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded bg-white shadow">
      <h2 className="font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
