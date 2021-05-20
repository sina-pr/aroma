const mongodb = require('mongoose');

const productSchema = mongodb.Schema({

  name: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  
  created: { type: Date, default: Date.now },

}) 

module.exports = mongodb.model('Product', productSchema);