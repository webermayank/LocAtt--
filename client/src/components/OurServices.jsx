import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Services2 from '../components/Services2'


const OurServices = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl p-12 font-bold">Our Services</h1>
      <p className="mt-2 p-8 text-4xl">Revolutionizing Employee Attendance </p>
      <div className="flex justify-around mt-8">
        <div className="w-1/4 p-4  rounded-lg">
          <img
            src={img1}
            alt="Feature 1"
            className="h-54 rounded-full w-full object-cover"
          />{" "}
          {/* Placeholder for image */}
          <h2 className="mt-4 text-xl">Smart Attendance, Simplified!</h2>
          <p className="mt-2">
           Simple and secure working attendance tracking models
          </p>
          <a href="#" className="mt-4 text-blue-500">
            Explore page →
          </a>
        </div>
        <div className="w-1/4 p-4  rounded-lg">
          <img
            src={img2}
            alt="Feature 2"
            className="h-54 rounded-full md w-full object-cover"
          />{" "}
          {/* Placeholder for image */}
          <h2 className="mt-4 text-xl">
            Automate Employee Check-ins with Precision
          </h2>
          <p className="mt-2">
Calculate accurate Working Hours of Workers </p>
          <a href="#" className="mt-4 text-blue-500">
            Explore page →
          </a>
        </div>
        <div className="w-1/4 p-4  rounded-lg">
          <img
            src={img3}
            alt="Feature 3"
            className="h-54 rounded-full w-full object-cover"
          />{" "}
          {/* Placeholder for image */}
          <h2 className="mt-4 text-xl">
            Effortless Attendance, Powered by Geolocation
          </h2>
          <p className="mt-2">
            Utilize a combination of GPS, Wi-Fi triangulation, and cellular data
            to improve accuracy.
          </p>
          <a href="#" className="mt-4 text-blue-500">
            Explore page →
          </a>
        </div>
      </div>
      <div>
        <Services2/>
      </div>
    </div>
  );
};

export default OurServices;
