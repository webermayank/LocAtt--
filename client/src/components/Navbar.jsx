import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoimage.png";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <nav className="flex items-center p-4 rounded-lg mb-6">
        <img src={logo} alt="Logo" className="h-20 mr-3" />
        <ul className="flex items-center space-x-6 flex-grow">
          <li>
            <Link
              to="/"
              className="text-white text-xl hover:text-gray-700 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white text-xl hover:text-gray-700 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-xl hover:text-gray-700 transition-colors"
            >
              Contact
            </Link>
          </li>
          <div className="ml-auto flex space-x-5">
            <li>
              <Link
                to="/register"
                className="text-white text-xl hover:text-gray-700 transition-colors"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="text-white text-xl hover:text-gray-700 transition-colors"
              >
                Sign In
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
