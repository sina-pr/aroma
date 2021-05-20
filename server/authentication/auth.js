const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  return jwt.sign({ userId: user._id, userName: user.userName }, secretKey, {
    expiresIn: "1h",
  });
};

exports.verifyToken = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[0];
    

    payload = jwt.verify(token, secretKey);
    
    res.send(payload);
  } catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: "Access Restricted! Please Login",
    });
  }
};
