const router = require("express").Router();
const productModel = require("../models/products/productModel");

router.get("/", productModel.getProducts);
router.get("/trend", productModel.getTrendProducts);
router.get("/:id", productModel.getProduct);

router.post("/new", productModel.createProduct);

module.exports = router;
