"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>

      <div className="flex items-center gap-10">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-28"
        >
          Increment
        </button>

        <span
          className={`text-2xl font-semibold ${
            count > 0
              ? "text-green-600"
              : count < 0
              ? "text-red-600"
              : "text-gray-800"
          }`}
        >
          {count}
        </span> 
        <button
          onClick={() => setCount(count - 1)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-28"
        >
          Decrement
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 mt-5"
      >
        Reset
      </button>
    </div>
  );
}
