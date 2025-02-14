import Customer from "../Models/customer.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { generateToken } from "../Utils/jwtToken.js";

export const signup = async (req, res) => {
  const { userName, email, password, role } = req.body;
  try {
    if (!userName || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password is too short",
      });
    }

    const isExist = await Customer.findOne({ email });

    if (isExist) {
      res.status(400).json({
        message: "User already exist with this email.",
      });
    }

    const salt_round = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(password, salt_round);

    const newCustomer = new Customer({
      userName,
      email,
      password: hashedPassword,
      role,
    });

    // console.log("newUser===>", newCustomer);

    if (newCustomer) {
      generateToken(newCustomer._id, newCustomer.role, res);
      newCustomer.save();
      res.status(200).json({
        message: "Created successfully",
        data: req.body,
      });
    }
  } catch (error) {
    console.log("error in signup ==>", error.message);
    res.status(500).json({
      message: "Some this Went Wrong, sorry for inconvenience",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!password || !email) {
      res.status(400).json({
        message: "all fields must be filled",
      });
    }

    const user = await Customer.findOne({ email });

    if (!user) {
      res.status(500).json({
        error: true,
        message: "Invalid Credentials",
      });
    }

    const isAuthorized = await bcrypt.compare(password, user.password);

    console.log("isAuthorized", isAuthorized);

    if (!isAuthorized) {
      res.status(500).json({
        error: true,
        message: "Invalid Credentials",
      });
    }
    generateToken(user._id, user.role, res);
    res.status(200).json({
      user,
      message: "Login Successfull",
    });
  } catch (error) {
    console.log("error in login==>", error.message);
    res.status(500).json({
      message: "Some this Went Wrong, sorry for inconvenience",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "User Logged Out Successfully",
    });
  } catch (error) {
    console.log("error in logout==>", error.message);
    res.status(500).json({
      message: "Some this Went Wrong, sorry for inconvenience",
    });
  }
};

export const allUser = async (req, res) => {
  try {
    const allUser = await User.find();

    res.status(200).json({
      allUser,
      message: "User finded Successfully",
    });
  } catch (error) {
    console.log("error in getting allUser==>", error.message);
    res.status(500).json({
      message: "Some this Went Wrong, sorry for inconvenience",
    });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("error in check Auth", error.message);
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};
