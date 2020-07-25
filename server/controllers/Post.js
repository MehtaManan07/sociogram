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

// exports.updateLikes = async (req, res) => {
//   console.log('req.body,',req.body)
//   try {
//     const post = await Post.findById(req.body.id);
//     console.log(post)

//     // Check if the post has already been liked
//     if (
//       post.likes.filter(like => like.user.toString() === req.user.id).length > 0
//     ) {
//       return res.status(400).json({ msg: 'Post already liked' });
//     }

//     post.likes.unshift({ user: req.user._id });

//     await post.save();

//     res.json(post.likes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// }
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

exports.addComment = (req, res) => {
  const comment = {
    text: req.body.text,
    user: req.user._id 
  }
  Post.findByIdAndUpdate(
    { $pull: { comments: comment } },
    { new: true }
  ).populate("comments.user", "_id name")
  .exec((error, result) => {
    if(error) {
      return res.status(400).json({ error })
    } else {
      return res.json(result)
    }
  })
};