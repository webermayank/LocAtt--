import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoimage.png";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";


const Navbar = () => {
  return (
    <div className="max-w-6xl p-4">
      <nav className="flex items-center p-4 rounded-lg ml-12 mt-12 mb-6 h-20">
        {" "}
        <img src={logo} alt="Logo" className="h-20 mr-3" />
        <ul className="flex items-center space-x-16 flex-grow">
          <li>
            <Link
              to="/"
              className="text-white text-xl  hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white text-xl hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-xl hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </li>
          <div className=" flex items-end space-x-5 h-full">
            <li>
              <Link
                to="/register"
                className="text-white text-xl hover:text-gray-300 transition-colors"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white text-xl hover:text-gray-300 transition-colors"
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
