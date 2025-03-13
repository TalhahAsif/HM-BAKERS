import express from "express";
import { addProduct } from "../Controller/product.controller.js";
import { addCategory } from "../Controller/Category.controller.js";

const router = express.Router();

router.post("/addCategory", addCategory);
router.post("/addProduct", addProduct);

export default router;
