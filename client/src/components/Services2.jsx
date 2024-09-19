import React from "react";
import img4 from "../assets/img4.png";
import { FaCheck } from "react-icons/fa"; // Importing the tick icon

const Services2 = () => {
  return (
    <div className="flex items-center pt-20 mt-4 w-3/4 ml-20">
      <div className="flex-1 justify-center pl-2">
        {" "}
        {/* Added padding to shift image */}
        {/* Placeholder for image */}
        <img
          src={img4} // Add your image source here
          alt="Description of the image"
          className="h-92 w-4/5 rounded-lg object-cover ml-20"
        />
      </div>
      <div className="flex-1 text-left pl-5 ">
        <h2 className="text-4xl font-semibold p-2">
          Our Work Process and Procedure
        </h2>
        <ul className=" text-xl pl-4">
          {" "}
          {/* Changed padding to align list items to the left */}
          <li>
            <div className="pt-4">
              <FaCheck className="inline  mr-2" />
              Reister as a Company/Organisation to have own admin dashboard
            </div>
          </li>{" "}
          {/* Added tick icon */}
          <li>
            <div className="pt-4">
              <FaCheck className="inline mr-2" />
              Get your Employess our latest App "LOCATT"
            </div>
            
          </li>{" "}
          {/* Added tick icon */}
          <li>
            <div className="pt-4">
              <FaCheck className="inline mr-2" />
              Monitor checkin/checkout times and accurate attendance
            </div>
          </li>{" "}
          {/* Added tick icon */}
        </ul>
        <div className="pt-8">
          <button className="mt-4 px-5 py-2 pt-2 pb-2 pl-8 pr-8 rounded-full bg-darkBlue text-white">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services2;
