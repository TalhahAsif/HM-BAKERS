import express from "express";
import {
  adminLogin,
  adminSignup,
  allUser,
  checkAuth,
  login,
  logout,
  signup,
} from "../Controller/auth.controller.js";
import { isUser } from "../Middlewares/Auth.Middleware.js";
import { checkRole, isAllowed } from "../Middlewares/admins.Middleware.js";

const router = express.Router();

router.post("/register", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/checkAuth", isUser, checkAuth);

///Admin
router.get("/users", isUser, checkRole, allUser);
router.post("/adminSignup", isUser, checkRole, isAllowed, adminSignup);
router.post("/adminLogin", adminLogin);

export default router;
