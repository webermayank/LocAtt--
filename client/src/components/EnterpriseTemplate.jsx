import React,{useState} from "react";
import { FaInstagram, FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa'; // Importing React Icons

const EnterpriseTemplate = () => {

    const [showMessege, setShowmsg]= useState(false);

    const handleSubmit =()=>{
        setShowmsg(true);
    }
  return (
    <div>
      {/* Header Section */}
      <div className="bg-darkBlue mt-60 rounded-3xl h-72 w-4/5 mx-auto text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold p-4 mb-4">
          Have queries..? Get in touch with us{" "}
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Your email address"
            className="p-2 rounded-md border border-gray-300"
          />
          <button
            className="bg-green-500 text-white rounded-md px-4 py-2"
            onClick={handleSubmit}
          >
            Start now
          </button>
        </div>
        {showMessege && <h6>We'll contact you shortly</h6>}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-300 mt-20 py-8 px-6">
        <div>
          <p className=" text-3xl text-center font-bold p-12">Contact Us..</p>
        </div>
        <ul className=" flex justify-center space-x-12 ">
          {" "}
          {/* Added space-x-4 for spacing */}
          <li>
            {" "}
            <a href="">
              <FaInstagram size={24} />
            </a>
          </li>{" "}
          {/* Instagram icon */}
          <li>
            {" "}
            <a href="">
              <FaEnvelope size={24} />
            </a>
          </li>{" "}
          {/* Email icon */}
          <li>
            {" "}
            <a href="">
              <FaPhone size={24} />
            </a>
          </li>{" "}
          {/* Phone icon */}
          <li>
            {" "}
            <a href="">
              <FaFacebook size={24} />
            </a>
          </li>{" "}
          {/* Facebook icon */}
        </ul>
      </footer>
    </div>
  );
};

export default EnterpriseTemplate;
