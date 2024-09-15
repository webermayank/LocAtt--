import Attendance from "../models/Attendance.js";
// import user from "../models/user";
 export const checkIn = async (req, res) => {
  const { lat, lng } = req.body;

  try {
    const attendance = new Attendance({
      user: req.user.id,
      checkIn: Date.now(),
      location: { lat, lng },
    });
    await attendance.save();
    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
};

export const getAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find({ user: req.user.id }).sort(
      { checkIn: -1 }
    );
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching attendance records", error });
  }
};