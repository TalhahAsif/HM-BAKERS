import mongoose, { Schema } from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: "true",
      default: "customer",
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
    profileImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dhylynexh/image/upload/v1735133619/mzzxerbhycfp3ennyypk.png",
    },
    address: { type: String },
  },
  { timestamps: true }
);

const Customer = mongoose.model("customer", customerSchema);

export default Customer;
