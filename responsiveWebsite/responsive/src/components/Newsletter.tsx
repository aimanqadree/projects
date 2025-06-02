import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#00df9a] transition duration-300 ease-in-out"
              type="email"
              placeholder="Enter your Email"
            />
            <button className="bg-gradient-to-r from-[#00df9a] to-[#38f9d7] text-black rounded-md font-semibold w-[200px] ml-0 sm:ml-4 my-6 px-6 py-3 transition-all duration-500 ease-in-out hover:from-[#38f9d7] hover:to-[#00df9a] hover:shadow-[0_4px_15px_rgba(0,223,154,0.5)] hover:-translate-y-1">
              Notify Me
            </button>
          </div>

          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]  cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
