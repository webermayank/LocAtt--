import NodeGeocoder from "node-geocoder";

const  options = {
  provider: "openstreetmap",
  httpAdapter: "https",
  apiKey: null, // Not required for OpenStreetMap
  formatter: null,
  // Add these lines:
  userAgent: "locattendence/1.0", // Replace with your app name and version
  timeout: 5000 // Optional: set a timeout
};

const geocoder = NodeGeocoder(options);

export default geocoder;
