import express from "express";
import { saveLocation, getLocation, reverseGeocode } from "../controllers/companyController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin saves organization location
router.post("/save-location", auth, saveLocation);

// Admin gets organization location
router.get("/get-location", auth, getLocation);
router.post("/reverse-geocode", reverseGeocode);


//test to check database is connected or not
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Backend is connected!" });
});
export default router;
