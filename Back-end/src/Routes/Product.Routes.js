import express from "express";
import { addProduct } from "../Controller/product.controller";

const router = express.Router();

router.post("/addProduct", addProduct);

export default router;
