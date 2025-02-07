import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/connectDB.js";
import authRoutes from "./Routes/UserRoutes.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on localhost:${PORT}`);
});
