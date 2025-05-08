"use client";
import { useCart } from "../../../context/cartcontext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 flex justify-center">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item, idx) => (
              <li key={idx} className="border-b pb-2">
                <div>
               <span> {item.name} - ${item.price}  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Total: ${total}</p>
    
        </>
      )}
    </div>
  );
}



