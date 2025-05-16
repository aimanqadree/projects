import { Link } from "react-router-dom";
import { useProductStore } from "../store/product-data";

const WishlistPage = ({ onAddToCart }) => {
  const { handleToggleWishlist, wishlist } = useProductStore();
  return (
    <div className="min-h-[56vh]">
      <h2 className="text-2xl font-bold flex justify-center mt-8">
        ❤️ Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="px-37 mt-5">
          Your wishlist is empty.{" "}
          <Link to="/" className="text-blue-600 underline">
            Browse products
          </Link>{" "}
          to add items.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-7 px-14 max-w-[1690px] mx-auto">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 max-w-64 rounded shadow  transition-all relative  hover:scale-[101%] hover:shadow-xl  duration-300 ease-in-out"
            >
              <button
                onClick={() => handleToggleWishlist(product)}
                className="absolute top-2 right-2 z-10 cursor-pointer"
              >
                ❌
              </button>
              <img
                src={product.image}
                alt={product.name}
                className="w-60 h-60 object-cover rounded mb-3 "
              />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500">${product.price}</p>
              <button
                onClick={() => onAddToCart(product)}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out cursor-pointer"
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
