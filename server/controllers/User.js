const User = require("../models/User");
const Post = require("../models/Post");
const router = require("../routes/User");

exports.getUserProfile = (req, res) => {
  console.log(req.params.id)
  User.findOne({ _id: req.params.id})
    .select("-password")
    .exec((error, user) => {
      if (error || !user) {
        console.log(error, user)
        return res.status(404).json({ error: "User not found" });
      }
      Post.find({ user: req.params.id })
      .populate("user", "_id name")
      .exec((error, posts) => {
          if(error) {
              return res.status(400).json(error)
          }
          res.json({ user,posts })
      })
    });
};
