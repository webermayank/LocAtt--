import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import geofenceRoutes from "./routes/geofenceRoutes.js";

import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import helmet from "helmet";
import cors from "cors";

dotenv.config(); // Load config
const app = express();
connectDB();
const corsOptions = {
  origin: "http://localhost:5173", // Allow only this origin
  optionsSuccessStatus: 200,
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


 // Connect to Database
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "client/dist")));
// Init Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "blob:"],
      fontSrc: ["'self'", "data:", "http://localhost:5000"],
      mediaSrc: ["'self'", "data:"],
      connectSrc: ["'self'", "http://localhost:5000"],
    },
  })
);

// Define Routes

app.use("/api/auth", authRoutes);


app.use("/api/location", locationRoutes);

app.use("/api/attendance", attendanceRoutes, (req, res) => {
  res.send("At api/attendance");
});

app.use("/api/geofence", geofenceRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
