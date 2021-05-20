const mongodb = require("mongoose");
const User = require("../users/userSchema");
const bcrypt = require("bcrypt");
const auth = require("../../authentication/auth");

exports.registerUser = (req, res) => {
  User.exists({ userName: req.body.userName }, (err, result) => {
    if (err) {
      return res.status(400).json(err);
    } else {
      if (result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: "userName address is already taken",
        });
      } else {
        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: "Failed when encrypting user password",
            });
          }

          const newUser = new User({
            userName: req.body.userName,
            passwordHash: hash,
          });

          newUser
            .save()
            .then(() => {
              res.status(201).json({
                statusCode: 201,
                status: true,
                message: "User was created successfully",
              });
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: "Failed to create user",
              });
            });
        });
      }
    }
  });
};

exports.loginUser = (req, res) => {
  User.findOne({ userName: req.body.userName }).then((user) => {
    if (user === null) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Incorrect user name or password",
      });
    }

    try {
      bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          if (result) {
            return res.status(200).json({
              statusCode: 200,
              status: true,
              message: "Authentication was successful",
              token: auth.generateToken(user),
              userId: user._id,
              userName: user.userName,
            });
          }
          return res.status(401).json({
            statusCode: 401,
            status: false,
            message: "Incorrect user name or password",
          });
        }
      });
    } catch {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message:
          "Unable to authenticate user. Please contact the system administrator",
      });
    }
  });
};
