import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-lg">
        <span>Welcome, Kenneth Osborne</span>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-600">Help</button>
        <button className="text-gray-600">Notifications</button>
      </div>
    </div>
  );
};

export default Topbar;
