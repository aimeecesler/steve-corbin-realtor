const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// New User Sign up
router.post("/api/signup", (req, res) => {
    const {
      email,
      password,
    } = req.body;
    if (!email.trim() || !password.trim()) {
      res.status(400);
    } else {
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          db.User.create({
            email: email,
            password: hashedPassword,
          })
            .then((NewUser) => {
              const token = jwt.sign({ userId: NewUser._id }, process.env.SECRET);
              res.json({
                error: false,
                data: token,
                message: "Successfully signed up.",
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: true,
                data: null,
                message: "Failed to add new user.",
              });
            });
        })
        .catch((err) => {
          res.status(500);
        });
    }
  });

// Login
router.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.User.findOne({ email: email })
    .then((foundUser) => {
      if (foundUser === null) {
        res.status(401).json({
          error: true,
          data: null,
          message: "Not a valid user.",
        });
      } else if (foundUser) {
        bcrypt
          .compare(password, foundUser.password)
          .then(function (result) {
            if (result) {
              const token = jwt.sign(
                { userId: foundUser._id },
                process.env.SECRET
              );
              res.json({
                error: false,
                data: token,
                message: "Successfully logged in.",
              });
            } else {
              res.status(401).json({
                error: true,
                data: null,
                message: "Failed to sign in.",
              });
            }
          })
          .catch((err) => {
            res.status(401).json({
              error: true,
              data: null,
              message: "Failed to sign in.",
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to sign in.",
      });
    });
});

module.exports = router;
