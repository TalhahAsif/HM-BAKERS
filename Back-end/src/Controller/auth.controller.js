import User from "../Models/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

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

    const isExist = await User.findOne({ email });

    if (isExist) {
      res.status(400).json({
        message: "User already exist with this email.",
      });
    }

    const salt_round = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(password, salt_round);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    console.log("newUser===>", newUser);

    res.status(200).json({
        message: "user found",
        data: req.body,
      });
  } catch (error) {
    console.log("error in signup ==>", error.message);
    res.status(500).json({
      message: "Some this Went Wrong, sorry for inconvenience",
    });
  }
};
export const login = (req, res) => {};
export const allUser = (req, res) => {};
