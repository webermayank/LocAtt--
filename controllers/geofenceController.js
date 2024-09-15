import Attendance from "../models/Attendance.js";

export const handleGeofenceEvent = async (req, res) => {
  const { userId, latitude, longitude, eventType } = req.body;

  try {
    const attendance = new Attendance({
      user: userId,
      location: { lat: latitude, lng: longitude },
      checkIn: eventType === "enter" ? new Date() : undefined,
      checkOut: eventType === "exit" ? new Date() : undefined,
    });

    await attendance.save();
    res.status(200).json({ message: "Geofence event recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error recording geofence event", error });
  }
};
