import jwt from "jsonwebtoken";
import User from "../Models/customer.model.js";

const Authorities = [
  "manage Inventory",
  "manage customers",
  "view order",
  "dispatch orders",
];

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
    const authorities = req.user.authorities;

    if (userRole == "admin") {
      next();
    }

    const allowed = authorities.filter((authority) =>
      Authorities.includes(authority)
    );

    if (!allowed) {
      res.status(200).json({
        message: "access denied",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("error in isAllowed middleware", error);
    res.status(500).json({
      error: true,
      message: "Some this went wrong",
    });
  }
};
