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

exports.create = (req, res) => {
  // let form = new formidable.IncomingForm();
  // form.keepExtensions = true;
  // form.parse(req, (error, fields, files) => {
  //   if (error) {
  //     return res.status(400).json({
  //       error: "Image cannot not be uploaded",
  //     });
  //   }
  //   let post = new Post(fields);
  //   if (files.image) {
  //     if (files.image.size > 10 ** 6) {
  //       return res.status(400).json({
  //         error: "Size of image must be less than 1 mb",
  //       });
  //     }
  //     post.image.data = fs.readFileSync(files.image.path);
  //     post.image.contentType = files.image.type;
  //   }
  //   post.save((error, result) => {
  //     if (error) {
  //       console.log(error);
  //       return res.status(400).json({
  //         error,
  //       });
  //     }
  //     res.json(result);
  //   });
  // });
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
    .exec((userPost, error) => {
      if (error) {
        console.log(error);
        res.json({ error: "Error while fetching all posts" });
      } else {
        res.json(userPost);
      }
    });
};
