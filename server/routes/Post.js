const express = require("express");
const requireLogin = require("../middlewares/requireLogin");
const {
  createPost,
  getAllPosts,
  userPosts,
  updateLikes,
  unLike,
  addComment,
  getPostById,
  getFollowingPosts,
  deletePost,
  deleteComment,
} = require("../controllers/Post");
const router = express.Router();

router.get("/all", requireLogin, getAllPosts);
router.get("/getFollowing", requireLogin, getFollowingPosts);
router.get("/userPosts", requireLogin, userPosts);
router.get("/post/:postId", requireLogin, getPostById);

router.post("/create", requireLogin, createPost);

router.put("/like", requireLogin, updateLikes);
router.put("/unlike", requireLogin, unLike);
router.put("/addComment", requireLogin, addComment);

router.delete('/delete/:postId', requireLogin, deletePost)
router.delete('/delete/comment/:postId/:commentId', requireLogin, deleteComment)

module.exports = router;
// /:postId/:commentId