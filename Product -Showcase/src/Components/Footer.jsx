import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12 rounded">
      <div className="max-w-[1690px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white cursor-pointer">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-white cursor-pointer">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold">Help</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/contact" className="hover:text-white cursor-pointer">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-white cursor-pointer">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/return"  className="hover:text-white cursor-pointer">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold">Content</h2>
          <p>
            <Link
              to="mailto:support@productshowcase.com"
              target="_blank"
              className="text-gray-300 cursor-pointer"
            >
              support@productshowcase.com
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-gray-900 py-4 text-gray-300 text-lg">
        <p className="text-center">
          Bringing the best to your doorstep. © 2025 Product Showcase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
