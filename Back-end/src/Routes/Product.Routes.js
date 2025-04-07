import express from "express";
import { addProduct, getProduct } from "../Controller/product.controller.js";
import { addCategory, getCategory } from "../Controller/Category.controller.js";
import { isUser } from "../Middlewares/Auth.Middleware.js";
import { checkRole, isAllowed } from "../Middlewares/admins.Middleware.js";

const router = express.Router();

router.get("/getCategory", isUser, checkRole, isAllowed, getCategory);
router.post("/addCategory", isUser, checkRole, isAllowed, addCategory);

router.post("/addProduct", isUser, checkRole, isAllowed, addProduct);
router.get("/getProduct", isUser, checkRole, isAllowed, getProduct);

export default router;
