import Company from "../models/company.js";
import geocoder from "../utils/geocoder.js";
import { getCachedGeocode, setCachedGeocode } from "../utils/geocodeCache.js";

export const saveLocation = async (req, res) => {
  const { lat, lng, name } = req.body;

  try {
    //get location details
    const geoData = await geocoder.reverse({ lat, lon: lng });
    const locationDetails = geoData[0];
    console.log(locationDetails);

    //check if company already exists
    const existingCompany = await Company.findOne({ admin: req.user.id });

    if (existingCompany) {
      existingCompany.location = {
        lat,
        lng,
        city: locationDetails.city,
        state: locationDetails.state,
        country: locationDetails.country,
        zipcode: locationDetails.zipcode,
      };
      await existingCompany.save();
      return res
        .status(200)
        .json({
          msg: "Location updated successfully",
          location: existingCompany.location,
        });
    }

    const newCompany = new Company({
     admin: req.user.id,
      name,
      location: { 
        lat, 
        lng,
        city: locationDetails.city,
        state: locationDetails.state,
        country: locationDetails.country,
        zipcode: locationDetails.zipcode,
      },
    });

    await newCompany.save();
    res
      .status(201)
      .json({
        msg: "Company location saved successfully",
        location: newCompany.location,
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
export const getLocation = async (req, res) => {
  try {
    const company = await Company.findOne({ admin: req.user.id });
    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }
    res.json(company.location);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

export const reverseGeocode = async (req, res) => {
  const { lat, lng } = req.body;

  try {
    // Check cache first
    const cachedData = getCachedGeocode(lat, lng);
    if (cachedData) {
      return res.json(cachedData);
    }

    const geoData = await geocoder.reverse({ lat, lon: lng });
    const locationDetails = geoData[0];

    const result = {
      city: locationDetails.city,
      state: locationDetails.state,
      country: locationDetails.country,
      zipcode: locationDetails.zipcode,
    };

    // Cache the result
    setCachedGeocode(lat, lng, result);

    res.json(result);
  } catch (error) {
    console.error("Reverse geocoding error:", error);
    res.status(500).json({ error: "Failed to reverse geocode" });
  }
};