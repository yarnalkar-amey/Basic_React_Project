import express from "express";
import {
  deleteProduct,
  getAllProducts,
  getProduct,
  postProduct,
  updateProduct
} from "../Controllers/Product.controller.js";

const router = express.Router();

/* ------------------ CREATE PRODUCT ------------------ */
router.post("/", postProduct);

/* ------------------ READ PRODUCTS ------------------ */
// Get all products
router.get("/", getAllProducts);

// Get a single product by ID
router.get("/:id", getProduct);

/* ------------------ UPDATE PRODUCT ------------------ */
router.put("/:id", updateProduct);

/* ------------------ DELETE PRODUCT ------------------ */
router.delete("/:id", deleteProduct);

export default router;
