import React, { useState } from "react";
import _ from "lodash";
import { register } from "../api/auth";
import { reverseGeocode } from "../api/location";

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    password: "",
    lat: null,
    lng: null,
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });
  const [error, setError] = useState("");
  const [locationCache, setLocationCache] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const reverseGeocode = async (lat, lon) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    if (!response.ok) {
      throw new Error("Geocoding failed");
    }
    const data = await response.json();
    return {
      city: data.address.city || data.address.town,
      state: data.address.state,
      country: data.address.country,
      zipcode: data.address.postcode,
    };
  };

  const rateLimitedReverseGeocode = _.debounce(async (latitude, longitude) => {
    try {
      const locationDetails = await reverseGeocode(latitude, longitude);
      setFormData((prevState) => ({
        ...prevState,
        ...locationDetails,
      }));
      setLocationCache((prevCache) => ({
        ...prevCache,
        [`${latitude},${longitude}`]: locationDetails,
      }));
    } catch (error) {
      console.error("Error fetching location details:", error);
      setError("Failed to fetch location details");
    }
  }, 1000);

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          setFormData((prevState) => ({
            ...prevState,
            lat: latitude,
            lng: longitude,
          }));

          const cacheKey = `${latitude},${longitude}`;
          if (locationCache[cacheKey]) {
            setFormData((prevState) => ({
              ...prevState,
              ...locationCache[cacheKey],
            }));
          } else {
            rateLimitedReverseGeocode(latitude, longitude);
          }
        },
        function (error) {
          setError("Error: " + error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      console.log("registration success", response);
      // Handle successful registration (e.g., redirect to dashboard)
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "An error occurred during registration");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Registration
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700">Admin Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Admin Name"
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Location (Latitude, Longitude)
          </label>
          <input
            type="text"
            value={
              formData.lat && formData.lng
                ? `${formData.lat}, ${formData.lng}`
                : ""
            }
            placeholder="Location (Latitude, Longitude)"
            readOnly
            className="w-full px-3 py-2 border rounded-lg"
          />
          <button
            type="button"
            onClick={getCurrentLocation}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Get Current Location
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Zipcode</label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="Zipcode"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default AdminRegistration;
