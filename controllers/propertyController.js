const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// GET ALL PROPERTIES
router.get("/", (req, res) => {
      db.Property.find({})
        .then((properties) => {
          res.json(properties);
        })
        .catch((err) => {
          res.status(500).json({
            error: true,
            data: null,
            message: "Failed to retrieve all Properties",
          });
        });
});

// CREATE A NEW PROPERTY LISTING
router.post("/", (req, res) => {
  if (!req.body.auth) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.body.auth, process.env.SECRET, (err, decoded) => {
    if (err) {
      // console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      db.Property.create(req.body.newProperty)
        .then((newProperty) => {
          res.json(newProperty);
        })
        .catch((err) => {
          res.status(500).json({
            error: true,
            data: null,
            message: "Failed to add new property.",
          });
        });
    }
  });
});

// DELETE SELECTED PROPERTY
router.delete("/:id/:jwt", (req, res) => {
  if (!req.params.jwt) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.params.jwt, process.env.SECRET, (err, decoded) => {
    if (err) {
      // console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      db.Property.findByIdAndDelete(req.params.id)
        .then((deletedEvent) => {
          res.json(deletedEvent);
        })
        .catch((err) => {
          res.status(500).json({
            error: true,
            data: null,
            message: "Failed to delete property.",
          });
        });
    }
  });
});

// EDIT SELECTED PROPERTY
router.put("/:id", (req, res) => {
    if (!req.body.auth) {
      return res.status(401).json({
        error: true,
        data: null,
        message: "Unauthorized",
      });
    }
    jwt.verify(req.body.auth, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: true,
          data: null,
          message: "Invalid token.",
        });
      } else {
        db.Property.findByIdAndUpdate(req.params.id, req.body.updatedProperty)
          .then((property) => {
            res.json(property);
            console.log(res);
          })
          .catch((err) => {
            res.status(500).json({
              error: true,
              data: null,
              message: "Could not update property.",
            });
          });
      }
    });
  });

  module.exports = router;