const mongoose = require("mongoose");
const moment = require('moment');
const { ObjectId } = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: moment().format("DD MM YYYY"),
  },
  followers: [
    { type: ObjectId, ref: "User" }
  ],
  following: [
    { type: ObjectId, ref: "User" }
  ]
});
module.exports = User = mongoose.model("User", userSchema);
