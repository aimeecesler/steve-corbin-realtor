const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// GET ALL PROPERTIES
router.get("/", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      // console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
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
    }
  });
});

// CREATE A NEW PROPERTY LISTING
router.post("/", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      // console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      db.Property.create(req.body)
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
router.delete("/:id", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
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
router.put("/", (req, res) => {
    if (!req.headers.authorization) {
      return res.status(401).json({
        error: true,
        data: null,
        message: "Unauthorized",
      });
    }
    jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          error: true,
          data: null,
          message: "Invalid token.",
        });
      } else {
        db.Property.findByIdAndUpdate(req.body._id, req.body)
          .then((property) => {
            res.json(property);
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
