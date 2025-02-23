import jwt from "jsonwebtoken";
import User from "../Models/customer.model.js";

//// it is responsible for only super admin and manager can access
export const checkRole = async (req, res, next) => {
  try {
    const userRole = req.user.role;

    console.log(userRole);

    if (userRole !== "admin" && userRole !== "manager") {
      res.status(500).json({
        message: "ye admin ya manager nhi ha",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("error in checkRole middleware");
    res.status(500).json({
      error: true,
      message: "Some this went wrong",
    });
  }
};

//// it is responsible for only admin and manager access accourding to their authorities
export const isAllowed = (req, res, next) => {
  try {
    const userRole = req.user.role;
    const assignedAuthorities = req.user.authorities;
    const task = req.body.function;

    console.log(typeof userRole);

    if (userRole == "admin") {
      return next();
    }
    const allowed = assignedAuthorities.includes(task);

    console.log(allowed);

    if (!allowed) {
      res.status(200).json({
        message: "access denied",
      });
    }
    next();
  } catch (error) {
    console.log("error in isAllowed middleware", error);
    res.status(500).json({
      error: true,
      message: "Some this went wrong",
    });
  }
};
