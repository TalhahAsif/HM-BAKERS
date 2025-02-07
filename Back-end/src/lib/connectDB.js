import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB connected");
  } catch (error) {
    console.log(`error in db connection: ${error}`);
  }
};
