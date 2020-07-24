const Post = require("../models/Post");

exports.createPost = (req, res) => {
  const { title, body, image } = req.body;
  const newPost = new Post({
    title,
    body,
    image,
    user: req.user,
  });

  if (!title || !body || !image) {
    return res.status(404).json({ error: "All fields are required!!" });
  } else {
    newPost.save((error, post) => {
      if (error) {
        res.status(400).json({ error: "Error while creating the post" });
      } else {
        req.user.password = undefined;
        res.json({ post });
      }
    });
  }
};

exports.getAllPosts = (req, res) => {
  Post.find()
    .populate("user", "name _id")
    .exec((error, posts) => {
      if (error) {
        console.log(error);
        res.json({ error: "Error while fetching all posts" });
      } else {
        res.json(posts);
      }
    });
};

exports.userPosts = (req, res) => {
  Post.find({ user: req.user._id })
    .populate("user", "_id name")
    .exec((error, userPost) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: "Error while fetching alllll posts" });
      } else {
        res.json(userPost);
      }
    });
};

exports.updateLikes = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $push: { likes: req.user._id } },
    { new: true }
  ).exec((error, result) => {
    if(error) {
      return res.status(400).json({ error })
    } else {
      return res.json(result)
    }
  })
};

exports.unLike = (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    { $pull: { likes: req.user._id } },
    { new: true }
  ).exec((error, result) => {
    if(error) {
      return res.status(400).json({ error })
    } else {
      return res.json(result)
    }
  })
};