import express from "express";
import { auth, isAdmin } from "../middleware/authMiddleware.js";
import { getCompanyData } from "../controllers/authController.js";

// import auth from "../middleware/authMiddleware.js";
import {
  register,
  loginController,
  testController,
} from "../controllers/authController.js";
const router = express.Router();
// Register user
router.post("/register", register);
//Login post
//LOGIN POST
router.post("/login", loginController);

//test routes
router.get("/test", auth, isAdmin, testController);
//get company data
router.get("/company", auth, getCompanyData);


export default router;
