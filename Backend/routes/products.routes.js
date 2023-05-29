import express from "express";
import {
	offers,
	products,
	search
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/products", products);
router.get("/offers", offers);
router.get("/search", search);

export default router;
