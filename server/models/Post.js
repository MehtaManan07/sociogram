const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 32,
  },
  body: {
    type: String,
    required: true,
    minlength: 10
  },
  image: {
    type: String,
    default: 'true',
  },
  user: {
      type: ObjectId,
      ref: "User"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = User = mongoose.model("Post", postSchema);
