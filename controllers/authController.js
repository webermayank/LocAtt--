import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Company from "../models/company.js";
const createToken = (userId) => {
  const payload = { user: { id: userId } };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "300d" });
};

// Register Controller
export const register = async (req, res) => {
  const {
    name,
    email,
    password,
    companyName,
    lat,
    lng,
    city,
    state,
    country,
    zipcode,
  } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Create new user and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password: hashedPassword,
      role: "admin", // Set role as admin for this registration
    });
    await user.save();


    // Create new company
    const company = new Company({
      name: companyName,
      location: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        city,
        state,
        country,
        zipcode,
      },
      admin: user._id,
    });
    await company.save();
    console.log("Company saved:", company);

    const token = createToken(user._id);

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
      company: {
        id: company._id,
        name: company.name,
        location: company.location,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
//get company data
export const getCompanyData = async (req, res) => {
  try {
    const company = await Company.findOne({ admin: req.user.id });
    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }
    res.json(company);
  } catch (err) {
    console.error("Error fetching company data:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Login Controller
export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Validation
    if (!email || !password) return next("Please Provide All Fields");

    // Find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) return next("Invalid Username or Password");

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next("Invalid Username or Password");

    // Generate JWT token
    const token = createToken(user.id);

    // Remove password from the response
    user.password = undefined;

    // Send success response
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user,
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const testController = (req, res) => {
  res.send("protected");
};
