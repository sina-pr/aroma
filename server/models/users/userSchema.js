const mongodb = require("mongoose");

const userSchema = mongodb.Schema({
  userName: { type: String, required: true },
  passwordHash: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongodb.model("User", userSchema);
