import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    authorities: [
      {
        type: String,
      },
    ],
    role: {
      type: String,
      required: "true",
      enum: ["admin", "manager"],
    },

    authorities: {
      type: [String],
      required: true,
      validate: {
        validator: function (array) {
          return array.length > 0;
        },
        message: "At least one authority is required",
      },
    },

    profileImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dhylynexh/image/upload/v1735133619/mzzxerbhycfp3ennyypk.png",
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
