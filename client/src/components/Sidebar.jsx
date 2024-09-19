import React from "react";
import {
  FaHome,
  FaChartBar,
  FaTable,
  FaIcons,
  FaUser,
  
  FaFileAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold text-pink-500 mb-6">Celestial</h2>
      <ul className="space-y-4">
        <li>
          <button className="flex items-center text-lg w-full text-left">
            <FaHome className="mr-3" /> Dashboard
          </button>
        </li>
        <li>
          <button className="flex items-center text-lg w-full text-left">
            <FaChartBar className="mr-3" /> Charts
          </button>
        </li>
        <li>
          <button className="flex items-center text-lg w-full text-left">
            <FaTable className="mr-3" /> Records
          </button>
        </li>
        <li>
          <button className="flex items-center text-lg w-full text-left">
            <FaIcons className="mr-3" /> Employess
          </button>
        </li>
        <li>
          <button className="flex items-center text-lg w-full text-left">
            <FaUser className="mr-3" /> Wages Records
          </button>
        </li>
        <li>
          <button className="flex items-center text-lg w-full text-left">
            <FaFileAlt className="mr-3" /> Documentation
          </button>
        </li>
        <li>
          <button className="flex items-center text-lg w-full text-left">
            <FaFileAlt className="mr-3" /> Settings
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
