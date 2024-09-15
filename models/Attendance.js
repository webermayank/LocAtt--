import mongoose from "mongoose";

const Attendance = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  checkIn: { type: Date },
  checkOut: { type: Date },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  totalHours: { type: Number },
});

export default mongoose.models.Attendance ||
  mongoose.model("Attendance", Attendance);
