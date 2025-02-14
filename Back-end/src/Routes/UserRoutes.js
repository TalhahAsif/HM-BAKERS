import express from "express";
import {
  allUser,
  checkAuth,
  login,
  logout,
  signup,
} from "../Controller/auth.controller.js";
import { checkRole, isUser } from "../Middlewares/Auth.Middleware.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/users", isUser, checkRole, allUser);
router.get("/checkAuth", isUser, checkAuth);

export default router;
