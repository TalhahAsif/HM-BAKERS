import jwt from "jsonwebtoken";
import User from "../Models/customer.model.js";
import Admin from "../Models/admins.model.js";
import Customer from "../Models/customer.model.js";

export const isUser = async (req, res, next) => {
  //   console.log("middleware executed", req);
  try {
    const token = req.cookies.jwt;

    console.log("token", token);

    if (!token) {
      res.json({
        message: "user not found",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRAT);

    // console.log(decoded);

    if (!decoded) {
      res.status(500).json({
        message: "Unauthorized token",
      });
    }

    const customer = await Customer.findById(decoded.userID).select("-password");
    const admin = await Admin.findById(decoded.userID).select("-password");

    if (!customer && !admin) {
      res.status(500).json({
        message: "User not found",
      });
    }

    if (admin) {
      req.user = admin;
    } else {
      req.user = customer;
    }

    next();
  } catch (error) {
    console.log("error in isUser middleware ==>", error);
    res.status(500).json({
      error: true,
      message: "some thing went wrong",
    });
  }
};
