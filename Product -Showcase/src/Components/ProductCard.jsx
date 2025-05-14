import { useProductStore } from "../store/product-data";

const ProductCard = ({ product, onAddToCart, isInWishlist }) => {
  const { handleToggleWishlist } = useProductStore();

  return (
    <div className="flex justify-evenly w-72">
      <div className="bg-white p-4 rounded shadow  transition-all relative  hover:scale-[101%] hover:shadow-xl  duration-300 ease-in-out">
        <button
          onClick={() => handleToggleWishlist(product)}
          className="absolute top-2 right-2 text-2xl z-10 cursor-pointer"
        >
          {isInWishlist ? "❤️" : "🤍"}
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-60 object-cover rounded mb-3"
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500">${product.price}</p>

        <button
          onClick={onAddToCart}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
