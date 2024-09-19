import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-darkBlue text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="flex justify-center space-x-12 h-240">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-64">
          <h3 className="text-3xl font-semibold mb-4 ">Free</h3>
          <p className="text-lg mb-4">No cost, forever.</p>
          <ul className=" mb-4">
            <li>✔️ Basic Features</li>
            <li>✔️ Community Support</li>
            <li>✔️ Limited Access</li>
          </ul>
          <button className="bg-lessBlue text-white rounded-md px-4 py-2">
            Get Started
          </button>
        </div>

        <div className="bg-white text-gray-800 rounded-lg   shadow-lg p-6 w-64">
          <h3 className="text-3xl font-semibold mb-4">$5</h3>
          <p className="text-lg mb-4">Affordable monthly plan.</p>
          <ul className="mb-4">
            <li>✔️ All Free Features</li>
            <li>✔️ Email Support</li>
            <li>✔️ Extended Access</li>
          </ul>
          <button className="bg-lessBlue text-white rounded-md px-4 py-2">
            Get Started
          </button>
        </div>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-64">
          <h3 className="text-3xl font-semibold mb-4">$50</h3>
          <p className="text-lg mb-4">Premium plan for serious users.</p>
          <ul className="mb-4">
            <li>✔️ All $5 Features</li>
            <li>✔️ Priority Support</li>
            <li>✔️ Unlimited Access</li>
          </ul>
          <button className="bg-lessBlue text-white rounded-md px-4 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
