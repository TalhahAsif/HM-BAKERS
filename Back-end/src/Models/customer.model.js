import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: "true",
      enum: ["admin", "manager", "custumer"],
      default: "custumer",
    },
    profileImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dhylynexh/image/upload/v1735133619/mzzxerbhycfp3ennyypk.png",
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("customer", customerSchema);

export default Customer;
