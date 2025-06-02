// import React, {useState} from "react";
// import { LuMenu, LuX } from "react-icons/lu";
// const Navbar = () => {
//     const [nav, setNav] = useState (false);
//     const handlenav = () => {
//         setNav(!nav);
//     }
//   return (
//     <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
//       <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
//       <ul className="hidden md:flex  cursor-pointer">
//         <li className="p-4 text-center cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Company</li>
//         <li className="p-4 text-center cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Home</li>
//         <li className="p-4 text-center cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Resources</li>
//         <li className="p-4 text-center cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">About</li>
//         <li className="p-4 text-center cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Contact</li>
//       </ul>
//       <div onClick={handlenav} className="block md:hidden">
//          {nav ? <LuX size={20} /> : <LuMenu size={20} />}
//         {/* <LuMenu size={20} /> */}
//       </div>
//       <div className={nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 ": "fixed left-[-100%]"}>
//         <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT</h1>
//         <ul className=" uppercase p-4  cursor-pointer">
//           <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Home</li>
//           <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Company</li>
//           <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Resources</li>
//           <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">About</li>
//           <li className="p-4 cursor-pointer hover:text-[#00df9a] hover:scale-105 transition-all duration-300">Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 hover:text-[#00df9a] transition duration-300">Company</li>
        <li className="p-4 hover:text-[#00df9a] transition duration-300">Home</li>
        <li className="p-4 hover:text-[#00df9a] transition duration-300">Resources</li>
        <li className="p-4 hover:text-[#00df9a] transition duration-300">About</li>
        <li className="p-4 hover:text-[#00df9a] transition duration-300">Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
        {nav ? <LuX size={25} /> : <LuMenu size={25} />}
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 ease-in-out duration-500 z-40"
            : "md:hidden fixed left-[-100%] top-0 h-full ease-in-out duration-500 z-40"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">REACT</h1>
        <ul className="uppercase p-4 cursor-pointer">
          <li onClick={handleNav} className="p-4 border-b border-gray-600 hover:text-[#00df9a] transition duration-300">
            Home
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600 hover:text-[#00df9a] transition duration-300">
            Company
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600 hover:text-[#00df9a] transition duration-300">
            Resources
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600 hover:text-[#00df9a] transition duration-300">
            About
          </li>
          <li onClick={handleNav} className="p-4 hover:text-[#00df9a] transition duration-300">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
