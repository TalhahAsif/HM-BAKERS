import jwt from "jsonwebtoken";
import User from "../Models/customer.model.js";

export const isUser = async (req, res, next) => {
  //   console.log("middleware executed", req);
  try {
    const token = req.cookies.jwt;

    // console.log("token", token);

    if (!token) {
      res.json({
        message: "access denied",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRAT);

    // console.log(decoded);

    if (!decoded) {
      res.status(500).json({
        message: "Unauthorized token",
      });
    }

    const user = await User.findById(decoded.userID).select("-password");

    if (!user) {
      res.status(500).json({
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error in isUser middleware ==>", error);
    res.status(500).json({
      error: true,
      message: "some thing went wrong",
    });
  }
};

export const checkRole = async (req, res, next) => {

  try {
    const userRole = req.user.role;

    if (userRole != "admin" || userRole != "manager") {
      res.status(500).json({
        message: "Access denied",
      });
    }
    next();
  } catch (error) {}
};
