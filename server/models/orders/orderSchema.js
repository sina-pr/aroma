const mongodb = require("mongoose");

const orderSchema = mongodb.Schema({
  userId: { type: String },
  cart: [
    {
      _id: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],

  created: { type: Date, default: Date.now },
});

module.exports = mongodb.model("Order", orderSchema);
