import express from "express";
import {
  allUser,
  login,
  logout,
  signup,
} from "../Controller/auth.controller.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/users", allUser);



export default router;
