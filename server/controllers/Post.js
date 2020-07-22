const Post = require("../models/Post");

exports.createPost = (req, res) => {
  const { title, body } = req.body;
  const newPost = new Post({
    title,
    body,
    user: req.user,
  });

  newPost.save((error, post) => {
    if (error) {
      res.status(400).json({ error: "Erro while creating the post" });
    } else {
      req.user.password = undefined;
      res.json({ post });
    }
  });
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
