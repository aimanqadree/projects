import { useNavigate } from "react-router-dom";

const Return = () => {const navigate = useNavigate();
  return (
    <div
      className="mt-14 bg-cover bg-center py-16 bg-[linear-gradient(to_right,rgba(0,0,0,0.9),rgba(0,0,0,0.2)),url('./returnimg.jpg')]"
      // style={{
      //   backgroundImage: "url('./returnimg.jpg')"
      // }}
    >
      <div className="max-w-6xl mx-auto px-4 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-cursive">
              Returns & Refunds
            </h2>
            <p className="mb-4">
              At Product Showcase, we want you to be completely satisfied with
              your purchase. If you're not happy with your electronic product,
              you can request a return or replacement under our hassle-free
              returns policy.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Returns accepted within 7 days of delivery.</li>
              <li>
                Product must be unused, in original condition, and include all
                packaging/accessories.
              </li>
              <li>
                Refunds are processed within 5-7 business days after approval.
              </li>
              <li>
                Return shipping is free if the product was defective or damaged.
              </li>
              <li>Contact our support for help with return initiation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 font-cursive">
              Need to Return an Item?
            </h2>
            <p className="mb-4">
              We're here to make returns easy. Whether it's the wrong item, a
              defect, or simply not what you expected, just reach out and we'll
              take care of the rest.
            </p>
            <button
              onClick={()=>navigate("/contact")}
              className="px-4 py-2 border border-gray-900 rounded text-black text-lg bg-white font-medium hover:drop-shadow-xl hover:brightness-150 transition delay-150 duration-300 ease-in-out  hover:scale-110 cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-10 mt-16 text-black bg-white h-20">
        <div className="text-center">
          <div className="text-2xl">🔄</div>
          <p className="text-sm mt-1">Easy Returns</p>
        </div>
        <div className="text-center">
          <div className="text-2xl">💳</div>
          <p className="text-sm mt-1">Quick Refunds</p>
        </div>
        <div className="text-center">
          <div className="text-2xl">🛠️</div>
          <p className="text-sm mt-1">Replacement Support</p>
        </div>
      </div>
    </div>
  );
};

export default Return;
