import express from "express";
import { addProduct, getProduct } from "../Controller/product.controller.js";
import { addCategory } from "../Controller/Category.controller.js";

const router = express.Router();

router.post("/addCategory", addCategory);

router.post("/addProduct", addProduct);
router.get("/addProduct", getProduct);

export default router;
