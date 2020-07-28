const User = require("../models/User");
const Post = require("../models/Post");
const router = require("../routes/User");

exports.getUserProfile = (req, res) => {
  console.log(req.params.id);
  User.findOne({ _id: req.params.id })
    .select("-password")
    .exec((error, user) => {
      if (error || !user) {
        console.log(error, user);
        return res.status(404).json({ error: "User not found" });
      }
      Post.find({ user: req.params.id })
        .populate("user", "_id name")
        .exec((error, posts) => {
          if (error) {
            return res.status(400).json(error);
          }
          res.json({ user, posts });
        });
    });
};

exports.followUser = (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    { $push: { followers: req.user._id } },
    { new: true },
    (error, result) => {
      if (error) {
        return res.status(422).json({ error });
      }
      User.findByIdAndUpdate(req.user._id,{ $push: { following: req.body.followId } },
        { new: true },(error,response) => {
          if (error) {
            return res.status(422).json({ error });
          }
          res.status(200).json(response)
        })
    }
  );
};

exports.unfollowUser = (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    { $pull: { followers: req.user._id } },
    { new: true },
    (error, result) => {
      if (error) {
        return res.status(422).json({ error });
      }
      User.findByIdAndUpdate(req.user._id,{ $pull: { following: req.body.unfollowId } },
        { new: true },(error,response) => {
          if (error) {
            return res.status(422).json({ error });
          }
          res.status(200).json(response)
        })
    }
  );
};
