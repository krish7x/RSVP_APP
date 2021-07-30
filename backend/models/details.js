/**
 * @author krish
 */

const mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    dob: String,
    address: String,
    profession: String,
    locality: String,
    numberOfGuests: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("details", schema, "details");
