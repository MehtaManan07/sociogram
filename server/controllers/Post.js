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
