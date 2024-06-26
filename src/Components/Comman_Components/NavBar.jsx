import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="container mx-auto flex justify-between items-center py-5">
        <div className="flex items-center">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
            alt="Logo"
          />
        </div>
        <ul className="flex space-x-1 text-gray-700 ml-auto">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/Alumini_Directory" className="nav-link">
              Alumni Directory
            </a>
          </li>
          <li>
            <a href="/Alumini-Achivements" className="nav-link">
              Achievements
            </a>
          </li>
          <li>
            <a href="#networking" className="nav-link">
              Networking
            </a>
          </li>
          <li>
            <a href="#news" className="nav-link">
              News
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#login"
              className="bg-gray-200 text-purple-600 px-4 py-2 rounded"
            >
              LOGIN/SIGNUP
            </a>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
