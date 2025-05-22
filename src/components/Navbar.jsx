import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white flex items-center justify-between px-4 py-2 shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <svg viewBox="0 0 36 36" fill="currentColor" className="h-8 w-8">
          <path d="M17.5 24v-7h-2v-3h2V9h3v5h2.5v3H20v7z" />
        </svg>
        <span className="text-xl font-semibold select-none">facebook</span>
      </div>
      <div className="flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search Facebook"
          className="w-full rounded-full py-1 px-3 text-gray-800 focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          aria-label="Profile"
          className="w-8 h-8 rounded-full bg-gray-300"
        >
          <img
            src="https://i.pravatar.cc/32"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </button>
        <button
          aria-label="Notifications"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-500 hover:bg-opacity-30 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 00-12 0v5H4v2h16v-2h-2z" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
