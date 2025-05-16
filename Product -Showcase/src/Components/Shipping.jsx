import { useNavigate } from "react-router-dom";

const Shipping = () => {const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center py-16 min-h-[56vh] mt-14"
      style={{
        backgroundImage:"url('./shipping.jpg')"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-black">
        <div className="grid md:grid-cols-2 gap-10 items-start">
    
          <div>
            <h2 className="text-3xl font-bold mb-4 font-cursive">Shipping Information</h2>
            <p className="mb-4">
              At Product Showcase, we strive to deliver your electronic products like laptops and accessories
              quickly and securely. Below is an overview of our shipping policy:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Orders are typically processed within 1-2 business days.</li>
              <li>Delivery timelines vary by location: 3-7 business days for standard shipping.</li>
              <li>We partner with trusted courier services for safe and fast delivery.</li>
              <li>Free shipping on all orders above $50.</li>
              <li>Order tracking is available once your package is dispatched.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 font-cursive">
              Need Help with Shipping?
            </h2>
            <p className="mb-4">
              If you have any issues with your delivery or need more information about your order,
              feel free to contact our support team. We're happy to assist you!
            </p>

           
            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-2 border border-gray-900 rounded text-lg bg-white font-medium hover:bg-gray-100 transition-colors duration-500 ease-in-out cursor-pointer"
            >
              Contact Support
            </button>
         

          </div>
        </div>
      </div>

    
      <div className="flex justify-center items-center space-x-10 mt-16 text-black bg-white h-20">
        <div className="text-center">
          <div className="text-2xl">🚚</div>
          <p className="text-sm mt-1">Fast Delivery</p>
        </div>
        <div className="text-center">
          <div className="text-2xl">📦</div>
          <p className="text-sm mt-1">Secure Packaging</p>
        </div>
        <div className="text-center">
          <div className="text-2xl">🔍</div>
          <p className="text-sm mt-1">Track Your Order</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
