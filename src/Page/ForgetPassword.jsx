import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 items-center py-3 md:py-5">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex justify-end items-center space-x-4">
          {/* Conditional Rendering for My Profile */}
          {window.innerWidth > 768 && (
            <div className="relative">
              <Link className="flex items-center text-gray-700">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="ml-2 text-sm">My Profile</span>
              </Link>
            </div>
          )}
          {/* End Conditional Rendering for My Profile */}
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          {/* End Mobile Menu Toggle */}
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:col-span-2 md:justify-end space-x-1 text-sm md:text-base text-gray-700`}
        >
          {/* Navigation Links */}
          <li>
            <NavLink
              exact
              to="/"
              className="nav-link px-3 flex text-sm md:text-base"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Alumini_Directory"
              className="nav-link flex px-2 text-sm md:text-base"
              activeClassName="active"
            >
              Alumni Directory
            </NavLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
        {/* Mobile Menu */}
        <ul className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <li>
            <NavLink
              exact
              to="/"
              className="block px-4 py-2 text-sm text-gray-700"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Alumini_Directory"
              className="block px-4 py-2 text-sm text-gray-700"
              activeClassName="active"
            >
              Alumni Directory
            </NavLink>
          </li>
          {/* Add more mobile navigation links as needed */}
        </ul>
        {/* End Mobile Menu */}
      </div>
    </nav>
  );
};

export default NavBar;

