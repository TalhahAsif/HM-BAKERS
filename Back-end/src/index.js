import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello"
  })
});

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
