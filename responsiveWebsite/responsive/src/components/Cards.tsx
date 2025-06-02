import React from "react";
import Single from "../assets/single.jpg";
import Double from "../assets/double.jpg";
import Triple from "../assets/triple.jpg";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            For Single User
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-gradient-to-r from-[#00df9a] to-[#38f9d7] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black cursor-pointer transition-all duration-500 ease-in-out hover:from-[#38f9d7] hover:to-[#00df9a] hover:shadow-[0_4px_15px_rgba(0,223,154,0.4)] hover:-translate-y-1">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">For Two Users</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="group bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer border border-[#00df9a] transition-all duration-500 flex items-center justify-center gap-2 hover:gap-4">
            <span className="transition-all duration-300">Get Started</span>
            <svg
              className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            For Multiple Users
          </h2>
          <p className="text-center text-4xl font-bold">$349</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-gradient-to-r from-[#00df9a] to-[#38f9d7] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black cursor-pointer transition-all duration-500 ease-in-out hover:from-[#38f9d7] hover:to-[#00df9a] hover:shadow-[0_4px_15px_rgba(0,223,154,0.4)] hover:-translate-y-1">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
