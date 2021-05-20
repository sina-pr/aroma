const mongodb = require("mongoose");
const Order = require("./orderSchema");

exports.createOrder = (req, res) => {
  const newOrder = new Order({
    userId: req.body.userId,
    cart: req.body.cart,
  });

  newOrder
    .save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: "Order created successfully",
      });
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Failed to create Order",
      });
    });
};
exports.getOrder = (req, res) => {
  Order.find({ userId: req.body.userId })
    .sort({ created: -1 })
    .then((product) => {
      let data = product.map((p) => p.cart);
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).json(err));
};
