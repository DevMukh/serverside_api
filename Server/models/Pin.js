const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Pinschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    lat: {
      type: Number,
      reuired: true,
    },
    log: {
      type: Number,
      reuired: true,
    },
    desc: {
      type: String,
    },
  },
  { timeStamp: true }
);
module.exports=mongoose.model("Pin", Pinschema);
