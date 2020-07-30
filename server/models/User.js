const mongoose = require("mongoose");
const moment = require("moment");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: "",
  },
  profileImage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
});
module.exports = User = mongoose.model("User", userSchema);
