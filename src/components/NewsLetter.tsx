import React from "react";

const NewsLetter: React.FC = () => {
  return (
    <div className="p-4 mb-24 flex flex-col justify-center items-center relative z-50">
      <h1 className="text-3xl font-semibold text-center tracking-wider mb-8">
        Subscribe to the Summer of Solana Experience
      </h1>
      <p className="text-xl text-center text-gray-400 tracking-wide mb-12">
        Hear stories from past interns, get the best resources on bitcoin and
        learn about the latest job opportunities in the industry.
      </p>
      <div className="flex items-center">
        <span className="w-full flex items-center rounded-md shadow-sm">
          <input
            type="text"
            className="bg-primary flex-1 px-7 py-3 block w-full rounded-none rounded-l-md sm:text-sm text-white border border-gray-400  "
            placeholder="Type your email..."
          />
          <button
            type="button"
            className="-ml-px bg-gradient-to-r py-3.5 from-[#9945FF] to-[#2FFAA1] relative inline-flex items-center px-3 text-sm font-medium rounded-r-md text-white hover:text-gray-50 focus:outline-none"
          >
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default NewsLetter;
