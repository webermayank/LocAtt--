import React from "react";
import blockimg from '../assets/fie-blockchain-solutions.png';
const BlockchainAdvantages = () => {
  return (
    <div className="flex justify-between p-24">
      <div className="w-1/2 pt-44">
        <h2 className="text-4xl pl-8 text-start mb-4">
          We insure Data security and privacy by Blockchain Technology.
        </h2>
        <ul className="space-y-4 p-8 ">
          <li className="bg-darkBlue text w-3/4 text-white p-4 rounded-full">
            Decentralization: Reduces the risk of data breaches.
          </li>
          <li className="bg-darkBlue w-3/4 text-white p-4 rounded-full">
            Transparency: Enhances trust through verifiable transactions.
          </li>
          <li className="bg-darkBlue w-3/4 text-white p-4 rounded-full">
            Immutability: Ensures data integrity and prevents tampering.
          </li>
          <li className="bg-darkBlue w-3/4 text-white p-4 rounded-full">
            Enhanced Security: Uses cryptographic techniques to secure data.
          </li>
        </ul>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white p-6 rounded ">
          <img src={blockimg} alt="" className="w-88" />
          <h3 className="text-lg font-semibold mb-2">
            Data Security Breakdown
          </h3>
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl">30%</div>
                <div>Decentralization</div>
              </div>
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mx-4">
              <div className="text-center">
                <div className="text-2xl">30%</div>
                <div>Transparency</div>
              </div>
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl">40%</div>
                <div>Immutability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainAdvantages;
