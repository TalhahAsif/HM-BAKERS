import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/connectDB.js";
import authRoutes from "./Routes/UserRoutes.js";
import productRoutes from "./Routes/Product.Routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // if you're using cookies
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/manageInventory", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on localhost:${PORT}`);
});
