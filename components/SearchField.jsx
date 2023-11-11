"use client";

import React, { useState } from "react";

function SearchField({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="relative flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
        className="pl-10 pr-4 py-2 rounded-full w-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l4.16 4.16a1.5 1.5 0 01-2.12 2.12L13 17"
          />
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5.2-5.2"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchField;
