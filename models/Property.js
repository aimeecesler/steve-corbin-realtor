const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  streetAddress: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  streetAddress2: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  state: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  zipCode: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  description: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  status: {
    type: String,
    trim: true,
    required: "String is Required",
    default: "For Sale",
  },
  yearBuilt: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  price: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  link: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  beds: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  baths: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  image: {
    type: String,
    trim: true,
  }
});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
