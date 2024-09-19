import React from 'react';
import heroBackground from '../images/heroBackground.png';
import Navbar from './Navbar';
import OurServices from './OurServices';
import PricingSection from "./PricingSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import BlockchainAdvantages from '../components/BlockchainAdvantages';
import EnterpriseTemplate from "../components/EnterpriseTemplate";


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
        <div className="flex space-x-4 mt-8">
          <button className="bg-green-500 text-2xl text-white px-4 py-2 rounded flex items-center">
            <FontAwesomeIcon icon={faAndroid} className="w-5 h-5 mr-2" />
            Android
          </button>
          <button className="bg-blue-500 text-2xl text-white px-4 py-2 rounded flex items-center">
            <FontAwesomeIcon icon={faApple} className="w-5 h-5 mr-2" />
            IOS
          </button>
        </div>
      </div>
      <div>
        <OurServices />
        <BlockchainAdvantages />
        <PricingSection />
        <EnterpriseTemplate />
      </div>
    </div>
  );
}
