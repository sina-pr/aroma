const router = require("express").Router();
const orderModel = require("../models/orders/orderModel");

router.post("/new", orderModel.createOrder);
router.post("/", orderModel.getOrder);

module.exports = router;
