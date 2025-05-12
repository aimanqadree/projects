
import { Link } from "react-router-dom";

const WishlistPage = ({ wishlist, onToggleWishlist, onAddToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex justify-center">❤️ Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. <Link to="/" className="text-blue-600 underline">Browse products</Link> to add items.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 px-14">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow relative"
            >
              <button
                onClick={() => onToggleWishlist(product)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
                aria-label="Remove from wishlist"
              >
                ❌
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => onAddToCart(product)}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;