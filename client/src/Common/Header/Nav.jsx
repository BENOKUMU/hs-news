import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-center bg-black p-4 shadow-md">
      {/* Left section: Hamburger icon and Logo */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Icon (visible on all screens) */}
        <div className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img src="/images/Header/logo.png" alt="Logo" className="h-10" />
        </div>
      </div>

      {/* Centered Navigation Links */}
      <div className="flex-grow flex justify-center space-x-6">
        {[
          "US",
          "World",
          "Politics",
          "Business",
          "Opinion",
          "Health",
          "Entertainment",
          "Style",
          "Travel",
          "Sports",
        ].map((link) => (
          <NavLink
            key={link}
            to={`/${link}`}
            className="text-white text-sm font-semibold hover:text-gray-400 transition-colors duration-300"
          >
            {link}
          </NavLink>
        ))}
      </div>

      {/* Right section: "Watch", "Listen", "Live TV", Search, Login */}
      <div className="flex items-center space-x-6">
        {/* "Watch", "Listen", "Live TV" links */}
        <div className="hidden md:flex space-x-6">
          {["Watch", "Listen", "Live TV"].map((link) => (
            <NavLink
              key={link}
              to={`/${link}`}
              className="text-white text-sm font-semibold hover:text-gray-400 transition-colors duration-300"
            >
              {link}
            </NavLink>
          ))}
        </div>

        {/* Search Icon */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* Login Link */}
        <NavLink
          to="/login"
          className="text-white text-sm font-semibold hover:text-black hover:bg-white border-2 border-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
