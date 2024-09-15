import React from 'react';
import heroBackground from '../images/heroBackground.png';
import Navbar from './Navbar';



export default function HeroTest() {
  return (
    <div
      className="text-center h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <Navbar />
      <div className=" flex flex-col items-start justify-center h-full pl-10 -mt-40 max-w-xl text-left ml-20">
        <p className=" font-raleway-700 text-6xl  text-white mb-4 pb4">
          Welcome to Location Based Attendance System
        </p>
        <p className="text-2xl text-gray-200">
          Manage your team's attendance with ease using location-based tracking.
        </p>
      </div>
    </div>
  );
}
