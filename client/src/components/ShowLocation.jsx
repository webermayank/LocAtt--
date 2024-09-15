import React, { useState, useEffect } from "react";
import { getLocation } from "../api/location";

const LocationDisplay = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
        const locationData = await getLocation(token);
        setLocation(locationData);
      } catch (err) {
        setError("Failed to fetch location");
        console.error(err);
      }
    };

    fetchLocation();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!location) return <div>Loading...</div>;

  return (
    <div>
      <h2>Company Location</h2>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <p>City: {location.city}</p>
      <p>State: {location.state}</p>
      <p>Country: {location.country}</p>
      <p>Zipcode: {location.zipcode}</p>
    </div>
  );
};

export default LocationDisplay;
