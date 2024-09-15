import express from "express";
import { handleGeofenceEvent } from "../controllers/geofenceController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// Endpoint to handle geofence events
router.post("/geofence-event", auth, handleGeofenceEvent);

export default router;
