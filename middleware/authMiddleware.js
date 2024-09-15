import jwt from "jsonwebtoken";
import user from "../models/user.js";
// import user from "../models/user.js";

export const auth = (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode; // to decrypt the token
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
    console.log(error);
  }
};
export const isAdmin = async (req, res, next) => {
  try {
    const admin = await user.findOne(req.user);
    if (admin.role !== "admin") {
      console.log("not admin");
      return res.status(400).send({
        success: false,
        message: "Unauthorised Access",
      });
      
    }
    next();
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "error is admin middleware" });
    console.log(error);
  }
};

export default auth;

// try {
//   const decoded = jwt.verify(valid, process.env.JWT_SECRET);
//   req.user = decoded.user;
//   next();
// } catch (err) {
//   console.error(err);
//   res.status(401).json({ msg: "Token is not valid" });
// }
