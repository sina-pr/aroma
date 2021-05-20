const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv/config");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to db
const mongoose = require("mongoose");

//Insert Routes
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");
const orderController = require("./controllers/orderController");

app.use("/products", productController);
app.use("/users", userController);
app.use("/orders", orderController);
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to database.")
);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3005, () => {
  console.log("Server is running.");
});
