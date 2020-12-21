const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  address: {
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
    type: Number,
    required: true,
  },
  link: {
    type: String,
    trim: true,
    required: "String is Required",
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
