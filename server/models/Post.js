const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const moment = require('moment');
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 32,
  },
  body: {
    type: String,
    required: true,
    minlength: 10,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: moment().format("DD MM YYYY"),
  },
  likes: [{ type: ObjectId, ref: "User" }],
  comments: [
    {
      text: String,
      user: { type: ObjectId, ref: "User" },
      name: String,
      date: {
        type: Date,
        default: moment().format("DD MM YYYY"),
      }
    },
  ],
});
module.exports = User = mongoose.model("Post", postSchema);
