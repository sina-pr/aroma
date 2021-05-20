const mongodb = require("mongoose");
const Product = require("./productSchema");

exports.getProducts = (req, res) => {
  Product.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(console.log(err)));
};
exports.getTrendProducts = (req, res) => {
  Product.find()
    .then((data) => res.status(200).json(data.slice(0, 4)))
    .catch((err) => res.status(500).json(console.log(err)));
};

exports.getProduct = (req, res) => {
  Product.exists({ _id: req.params.id }, (err, result) => {
    if (err) {
      return res.status(400).json(err);
    } else {
      if (result) {
        Product.findById(req.params.id)
          .then((product) => res.status(200).json(product))
          .catch((err) => res.status(500).json(err));
      } else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: "Ooops this product does not exist",
        });
      }
    }
  });
};

exports.createProduct = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image,
  });

  //console.log(newProduct);

  newProduct
    .save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: "Product created successfully",
      });
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Failed to create product",
      });
    });
};
