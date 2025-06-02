import React from "react";
import { Link } from "react-router-dom";
import {
  //   FaDribbbleSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <Link to={"/"}>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
        </Link>

        <p className="py-4">
          {" "}
          Empowering developers and businesses with reliable, scalable, and
          data-driven web solutions. Built with performance and simplicity in
          mind.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            size={30}
            className="cursor-pointer  hover:text-[#00df9a] transition-colors duration-300"
          />
          <FaInstagram
            size={30}
            className="cursor-pointer  hover:text-[#00df9a] transition-colors duration-300"
          />
          <FaTwitterSquare
            size={30}
            className="cursor-pointer  hover:text-[#00df9a] transition-colors duration-300"
          />
          <FaGithubSquare
            size={30}
            className="cursor-pointer  hover:text-[#00df9a] transition-colors duration-300"
          />
          <FaLinkedin
            size={30}
            className="cursor-pointer  hover:text-[#00df9a] transition-colors duration-300"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Analytics
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Marketing
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Commerce
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Insights
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Pricing
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Documentation
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Guides
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                API Status
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                About
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Blog
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Jobs
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Press
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Claim
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Policy
              </span>
            </li>
            <li className="py-2 text-sm cursor-pointer text-gray-300">
              <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#00df9a] after:transition-all after:duration-300 hover:after:w-full">
                Terms
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
