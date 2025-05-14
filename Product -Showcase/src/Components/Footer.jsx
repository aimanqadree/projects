
import {Link} from "react-router-dom"

const Footer = () => {
  return (
  <footer className="bg-gray-800 text-white mt-12 rounded">

    <div className="max-w-[1690px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

       <div className="space-y-3">
        <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white cursor-pointer">Home</Link></li>
            <li><Link to="/cart" className="hover:text-white cursor-pointer">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-white cursor-pointer">Wishlist</Link></li>
          </ul>
       </div>

       <div className="space-y-3">
        <h2 className="text-lg font-bold">Help</h2>
           <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white cursor-pointer">Contact</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Shipping</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer">Returns</a></li>
          </ul>
       </div>

       <div className="space-y-3">
        <h2 className="text-lg font-bold">Content</h2>
        <p className="text-gray-300 cursor-pointer">support@productshowcase.com</p>
        <p className="text-gray-300 cursor-pointer">+91 6289456799</p>
       </div>

       <div className="bg-gray-900 py-4 text-gray-300 text-lg">
        <p className=""> Product Showcase. All rights reserved</p>
       </div>
    </div>
  </footer>
  )
}

export default Footer