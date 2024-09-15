import express from "express";
import auth from "../middleware/authMiddleware.js";

import {checkIn, getAttendanceRecords}  from "../controllers/attendanceController.js";

const router = express.Router();

// Check-In Route
router.post("/checkin", auth, checkIn);


router.get("/records", auth, getAttendanceRecords);

export default router;
